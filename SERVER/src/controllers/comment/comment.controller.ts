import { Body, Controller, Delete, Post } from '@nestjs/common';
import { CommentService } from 'src/services/comment/comment.service';
import { Comment } from 'src/schemas/comment.schema';

@Controller('comment')
export class CommentController {
    constructor(
        private CommentService: CommentService,
    ) { }

    //CREATE COMMENT
    @Post('create')
    public async create(@Body() comment: Comment ) {
        return await this.CommentService.creatComment(comment);
    }
    //DELETE COMMENT
    @Delete('delete')
    public async deleteComment(@Body('id') id: string) {
        return await this.CommentService.deleteComment(id);
    }
 
}
//