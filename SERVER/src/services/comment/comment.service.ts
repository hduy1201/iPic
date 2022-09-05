import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from 'src/schemas/comment.schema';
import { CloudiaryService } from '../cloudiary/cloudiary.service';


@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
        private cloudiary: CloudiaryService,) { }

    async creatComment(comment: Comment) {
        let creatComment = new this.commentModel(comment);
        //creatComment._id
        await creatComment.save();

        /*await postModel.findByIdAndUpdate(
            comment.postId, 
            {
                $push: {comments: creatComment._id}});
        */
    }
    async updateComment(id: string, comment: Comment) {
        return await this.commentModel.updateOne(
            { _id: id },
            { $push: { comments: comment } },
        );
    }

    async deleteComment(id: string) {
        return await this.commentModel.findByIdAndDelete(id);
    }

}
