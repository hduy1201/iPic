import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put, Query, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PostService } from 'src/services/post/post.service';
import { UserService } from 'src/services/user/user.service';
import * as Schema from 'src/schemas/post.schema';
import { User } from 'src/models/user.model';
import { FileInterceptor } from '@nestjs/platform-express';
const imageToBase64 = require('image-to-base64');
import axios from 'axios';
import { NudeNet } from 'src/models/nude.model';
import { storage } from 'src/helpers/storage.helper';
@Controller('post')
export class PostController {

    constructor(
        private PostService: PostService,
        private UserService: UserService
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
    }

    @Put('/update')
    public async updatePost(@Query(`id`) id: string, @Body() post: Schema.Post) {
        return await this.PostService.updatePost(id, post);
    }

    @Delete('/delete')
    public async deletePost(@Query(`id`) id: string) {
        return await this.PostService.deletePost(id);
    }

    @Post('/test-nudenet')
    @UseInterceptors(FileInterceptor('file', {
        storage
    }))
    public async nudePost(@UploadedFile() file: Express.Multer.File) {
        if (!file) {
            throw new HttpException('Please choose any file!', HttpStatus.BAD_REQUEST);
        }
        let image = await imageToBase64('/Users/mac/Documents/itss-training/WEB22A/Pinterest/AdultImageClassifier/uploads/TestPic -1660903563817.png');

        let request = {
            data: {},
        };

        request.data[file.filename] = image;
        try {
            let result: NudeNet = await (await axios.post("http://localhost:8080/sync", request)).data;
            console.log(result);
            return result;
        } catch (error) {
            return error;
        }


    }

}
