import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Post } from './post.schema';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    required: true,
  })
  firstName: string;

  @Prop({
    required: true,
  })
  lastName: string;

  @Prop({
    required: true,
  })
  email: string;

  @Prop()
  dob: string;

  @Prop()
  photoURL: string;

  @Prop()
  gender: string;

  @Prop()
  description: string;

  @Prop()
  website: string;

  @Prop({
    default: Array,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  })
  posts: Post[];

  @Prop({
    default: Array
  })
  interests: Array<String>
}

export const UserSchema = SchemaFactory.createForClass(User);
