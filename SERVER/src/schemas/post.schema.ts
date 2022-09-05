import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ImagePost } from 'src/models/imageNude.model';
import { Tag } from './tag.schema';
import { User } from './user.schema';

export type PostDocument = Post & Document;

@Schema({
  timestamps: true
})
export class Post {
  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  content: string;

  @Prop({
    default: Array,
  })
  images: Array<{
    url: string,
    hashTag: string
  }>

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId, ref: "users"
  })
  authorId: string;

  @Prop({
    default: Array,
  })
  tags: string;

  @Prop({
    default: Array,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }]
  })
  likes: [];

  @Prop({
    default: Array,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comments' }]
  })
  comments: [];

  @Prop({
    required: true,
  })
  coverImage: string;

  /**public, private, archive */
  @Prop({
    default: 'public'
  })
  status: string;

  @Prop({
    default: Array<string>
  })
  links: Array<string>;
}

export const PostSchema = SchemaFactory.createForClass(Post);
