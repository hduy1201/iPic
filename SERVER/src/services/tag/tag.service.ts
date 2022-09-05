import { HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TagModel } from 'src/models/tag.model';
import { PostDocument } from 'src/schemas/post.schema';
import { Tag, TagDocument } from 'src/schemas/tag.schema';

@Injectable()
export class TagService {
  constructor(
    @InjectModel(Tag.name) private TagModel: Model<TagDocument>,
    @InjectModel(Post.name) private PostModel: Model<PostDocument>,
  ) { }

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
    return await this.TagModel.find();
  }

  async findByName(name: string) {
    try {

      return await this.TagModel.findOne({
        name,
      }).populate("posts", " ", this.PostModel).exec();
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
}
