import { Body, Controller, Delete, Post, Req } from '@nestjs/common';
import { CommentService } from 'src/services/comment/comment.service';
import { Comment } from 'src/schemas/comment.schema';

@Controller('comment')
export class CommentController {
    constructor(
        private CommentService: CommentService,
    ) { }

    //CREATE COMMENT
    @Post('create-comment')
    public async create(
        @Body() body: any,
        @Req() req: any
    ) {
        return await this.CommentService.creatComment(body.content, body.postId, req.payload.email);
    }
    //DELETE COMMENT
    @Delete('delete')
    public async deleteComment(@Body('id') id: string) {
        return await this.CommentService.deleteComment(id);
    }

}
//