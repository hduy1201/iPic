import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema({
    timestamps: true
})

export class Comment {
    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId, ref: "users"
    })
    userId: string;

    @Prop({
        required: true,
    })
    content: string;

    @Prop({
        default: null,
    })
    image: string;


    @Prop({
        default: Array,
    })
    comments: Array<Comment>;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId, ref: "posts"
    })
    postId: string;


}

export const CommentSchema = SchemaFactory.createForClass(Comment);