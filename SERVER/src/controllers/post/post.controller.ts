import { Body, Controller, Delete, Get, Post, Put, Query, Req } from '@nestjs/common';
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

    @Get('/')
    public async getPostById(@Query(`id`) id: string) {
        return await this.PostService.getPostById(id);
    }

    @Post('/add')
    public async createPost(@Body() post: Schema.Post, @Req() req: any) {

        console.log(post);
        
        // return await this.PostService.createPost(post);
    }

    @Put('/update')
    public async updatePost(@Query(`id`) id: string, @Body() post: Schema.Post) {
        return await this.PostService.updatePost(id, post);
    }

    @Delete('/delete')
    public async deletePost(@Query(`id`) id: string) {
        return await this.PostService.deletePost(id);
    }
}
