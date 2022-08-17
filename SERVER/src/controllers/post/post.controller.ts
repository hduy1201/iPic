import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostService } from 'src/services/post/post.service';
import * as Schema from 'src/schemas/post.schema'; 

@Controller('post')
export class PostController {

    constructor(
        private PostService: PostService,
    ) { }

    @Get('/all')
    public async testPost() {
        return await this.PostService.getAllPosts();
    }

    @Post('/send')
    public async createPost(@Body() post: Schema.Post) {
        return await this.PostService.createPost(post);
    }
}
