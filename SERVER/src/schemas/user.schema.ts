import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
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
  avavtar: string;

  @Prop()
  gender: string;
  
  @Prop()
  description: string;

  @Prop()
  website: string;
}

export const UserSchema = SchemaFactory.createForClass(User);