import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from 'src/schemas/comment.schema';
import { Post, PostDocument } from 'src/schemas/post.schema';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CloudiaryService } from '../cloudiary/cloudiary.service';


@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(Post.name) private postModel: Model<PostDocument>,
        private cloudiary: CloudiaryService
    ) { }

    async creatComment(content: string, postId: string, email: string) {

        let user = await this.userModel.findOne({ email: email });

        let creatComment = new this.commentModel({
            userId: user._id,
            content: content,
            postId: postId
        });
        try {
            await Promise.all([
                creatComment.save(),
                this.postModel.findByIdAndUpdate(
                    postId,
                    { $push: { comments: creatComment._id } },
                )
            ])

            return {
                message: "Comment created successfully"
            };
        } catch (error) {
            return error;
        }



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
