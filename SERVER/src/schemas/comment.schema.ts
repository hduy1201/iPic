import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ImagePost } from 'src/models/imageNude.model';
import { User } from './user.schema';

export type CommentDocument = Comment & Document;

@Schema({
    timestamps: true
})

export class Comment {
    @Prop({
        required: true,
    })
    userId: string;
    @Prop({
        required: true,
    })
    @Prop({
        default: null,
    })
    image: string;
    @Prop({
        required: true,
    })
    content: string;
    @Prop({
        default: Array,
    })
    comments: Array<Comment>;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);