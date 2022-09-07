import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from 'src/schemas/post.schema';
import { CloudiaryService } from '../cloudiary/cloudiary.service';
import { handlePostService } from '../../controllers/post/handlePost';
import { UserService } from '../../services/user/user.service';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Comment, CommentDocument } from 'src/schemas/comment.schema';
@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private cloudiary: CloudiaryService,
    private handlePost: handlePostService,
    private UserService: UserService
  ) { }

  async getTest() {
    try {
      return await this.postModel.find().populate("authorId", "", this.userModel);
    } catch (error) {
      return error;
    }
  }

  async getAllPosts(page: number, pageSize: number, email: string) {
    try {

      const user = await this.UserService.findUserByEmail(email);

      const regex = user['interests'].join("|");

      return await this.postModel
        .find({
          tags: {
            $regex: regex,
            $options: "i"
          },
          status: "public"
        })
        .sort({
          createdAt: -1
        })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .populate("authorId", "firstName email -_id", this.userModel)

    } catch (error) {
      return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getPostByTitle(keyword: string, page: number, pageSize: number) {
    try {
      const post = (await this.postModel.find());
      let dict = [];
      let vecSearch = this.stringToVec(keyword, dict);

      let vectors = [];
      for (let i = 0; i < post.length; i++) {
        let vec = this.stringToVec(post[i].title.toLowerCase(), dict);
        vectors.push(vec);
      }

      let distances = [];
      for (let i = 0; i < vectors.length; i++) {
        let distance = this.distance(vecSearch, vectors[i]);
        distances.push(distance);
      }

      let result = [];
      for (let i = 0; i < distances.length; i++) {
        result.push({
          post: post[i],
          distance: distances[i],
        });
      };

      result.sort((a, b) => a.distance - b.distance);

      return result.map((post) => post.post).splice((page - 1) * pageSize, pageSize);
    } catch (error) {
      return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getPostById(id: string) {
    try {
      const post = await this.postModel
        .findById(id)
        .populate("authorId", "firstName email -_id", this.userModel)
        .populate({
          path: "comments",
          model: this.commentModel,
          populate: {
            path: "userId",
            model: this.userModel,
          }
        })
      if (!post) {
        throw new HttpException('This post not exist', HttpStatus.BAD_REQUEST);
      }
      return post;
    } catch (error) {
      return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async createPost(post: Post) {
    try {
      let createPost = new this.postModel(post);

      //UPDATE POST TO TAG

      let savePost, updateTags, updateUser;

      [savePost, updateTags, updateUser] = await Promise.all([
        this.handlePost.handleTags(createPost.tags, createPost._id),
        this.UserService.updatePostUser(createPost.authorId, createPost._id),
        createPost.save(),
      ])

      return savePost;

    } catch (error) {
      return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async updatePost(id: string, post: Post) {
    try {
      const updatePost = await this.postModel.findByIdAndUpdate(id, post, {
        new: true,
      });
      if (!updatePost) {
        throw new HttpException('Update Failure', HttpStatus.BAD_REQUEST);
      }
      return updatePost;
    } catch (error) {
      return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async deletePost(id: string) {
    return await this.postModel.findByIdAndDelete(id);
  }

  async uploadImageToCloudinary(file: Express.Multer.File) {
    return await this.cloudiary.uploadImage(file).catch(() => {
      throw new BadRequestException('Invalid file type.');
    });
  }

  //Day la noi code ko duoc inject qua cho khac va chi phuc vu cho nhung ham tren
  private distance(vector1: any, vector2: any) {
    let dist = 0;
    if (vector1.length != vector2.length) {
      let maxlenth = Math.max(vector1.length, vector2.length);
      for (let i = vector1.length; i < maxlenth; i++) {
        vector1.push(0);
      }
      for (let i = vector2.length; i < maxlenth; i++) {
        vector2.push(0);
      }
    }
    for (let i = 0; i < vector1.length; i++) {
      dist += Math.pow(vector1[i] - vector2[i], 2);
    }
    return Math.sqrt(dist);
  }

  private stringToVec(textInput: string, dict: any) {
    textInput = textInput.replace(/[^\w\s]/gi, '')
    let words = textInput.split(' ').map((w) => w.toLowerCase());
    let vec = [];
    for (let i = 0; i < words.length; i++) {
      if (dict.indexOf(words[i]) == -1) {
        dict.push(words[i]);
      }
    }
    for (let i = 0; i < dict.length; i++) {
      vec.push(words.indexOf(dict[i]) == -1 ? 0 : 1);
    }
    return vec;
  }
}
