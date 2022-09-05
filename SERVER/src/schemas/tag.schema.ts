import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { TagModel } from 'src/models/tag.model';
import { Post } from './post.schema';

export type TagDocument = TagModel & Document;

@Schema(
  {
    timestamps: true
  }
)
export class Tag {
  @Prop(
    {
      required: true
    }
  )
  name: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'posts' }],
    default: Array
  })
  posts: Array<Post>
}
export const TagSchema = SchemaFactory.createForClass(Tag);