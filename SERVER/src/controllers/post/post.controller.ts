import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
  Query,
  Req,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostService } from 'src/services/post/post.service';
import { UserService } from 'src/services/user/user.service';
import * as Schema from 'src/schemas/post.schema';
import { User } from 'src/models/user.model';
import {
  FileInterceptor,
  FilesInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('post')
export class PostController {
  constructor(private PostService: PostService) {}

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

  //test uploadfiles
  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('images', Infinity, {
      storage: diskStorage({
        destination: './uploads/images',
        filename: (req, file, cb) => {
          // Generating a 32 random chars long string
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          //Calling the callback passing the random name generated with the original extension name
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }
}
