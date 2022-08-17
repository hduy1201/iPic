import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
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
  })
  images: string[];

  @Prop({
    required: true,
  })
  postedBy: string;

  @Prop({
    required: true,
  })
  tags: string[];

  @Prop()
  likes: string[];

  @Prop()
  comments: string[];

  /**Image */
  @Prop()
  coverImage: string;

  /**public, private, archive */
  @Prop()
  status: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
