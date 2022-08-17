import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
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
    required: true,
    default: Array
  })
  images: string[];

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId, ref: "Users"
  })
  authorId: User;

  @Prop({
    default: Array
  })
  tags: [];

  @Prop({
    default: Array,
  })
  likes: [];

  @Prop({
    default: Array
  })
  comments: [];

  /**Image */
  @Prop({
    required: true
  })
  coverImage: string;

  /**public, private, archive */
  @Prop()
  status: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
