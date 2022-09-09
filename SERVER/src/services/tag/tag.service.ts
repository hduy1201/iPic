import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TagModel } from 'src/models/tag.model';
import { Post, PostDocument } from 'src/schemas/post.schema';
import { Tag, TagDocument } from 'src/schemas/tag.schema';

@Injectable()
export class TagService {
  constructor(
    // @InjectModel(User.name) private UserModel: Model<UserDocument>,
    @InjectModel(Tag.name) private TagModel: Model<TagDocument>,
    @InjectModel(Post.name) private postModel: Model<PostDocument>,

  ) { }

  async findSuggestion() {

    var random = Math.floor(Math.random() * 5);

    return await this.TagModel.find().limit(10).select("name").skip(random);
  }

  async create(createTagDto: TagModel) {

    const _tag = await this.TagModel.findOne({
      name: createTagDto.name
    }).select("name")

    if (_tag) {
      throw new HttpException('Tag is exits!', HttpStatus.BAD_REQUEST);
    }

    const createdTag = new this.TagModel(createTagDto);
    return createdTag.save();
  }

  async findAll() {
    let posts: any = await this.TagModel.find().populate("posts", "", this.postModel);
    return posts;
  }

  async findByName(name: string) {
    try {
      let tag = `#${name}`;
      return await this.TagModel.findOne({
        name: tag,
      }).populate("posts", " ", this.postModel).exec();
    } catch (error) {
      return new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async addPostToTag(tagName: string, idPost: string) {
    try {
      this.TagModel.findOne(
        {
          name: tagName
        },
        async (error, result) => {
          if (!result) {
            const createdTag = new this.TagModel({
              name: tagName,
              posts: [idPost]
            });
            await createdTag.save();
          } else {
            await this.TagModel.findOneAndUpdate(
              {
                name: tagName
              },
              {
                $push: {
                  posts: idPost
                }
              }
            )
          }
        }
      )
    } catch (error) {
      return error;
    }
  }

  async findPostById(id: string) {
    try {
      let post = await this.postModel.findById(id);
      console.log(post);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

}
