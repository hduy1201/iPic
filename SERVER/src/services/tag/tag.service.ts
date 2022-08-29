import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TagModel } from 'src/models/tag.model';
import { tag, TagDocument } from 'src/schemas/tag.schema';

@Injectable()
export class TagService {
    constructor(@InjectModel(tag.name) private TagModel: Model<TagDocument>) {}

    async create(createTagDto: TagModel): Promise<TagModel> {
        const createdTag = new this.TagModel(createTagDto);
        return createdTag.save();
      }
    
      async findAll(): Promise<tag[]> {
        return this.TagModel.find().exec();
      }
}
