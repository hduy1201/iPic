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
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostService } from 'src/services/post/post.service';
import { UserService } from 'src/services/user/user.service';
import * as Schema from 'src/schemas/post.schema';
import {
  FileInterceptor,
  FilesInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CloudiaryService } from 'src/services/cloudiary/cloudiary.service';
import { ImagePost } from 'src/models/imageNude.model';

@Controller('post')
export class PostController {
  constructor(
    private PostService: PostService,
    private CloudiaryService: CloudiaryService,
  ) { }

  //GET ALL POSTS
  @Get('/')
  public async testPost(
    @Query('page') page: number,
    @Query('pagesize') pagesize: number,
  ) {
    return await this.PostService.getAllPosts(page, pagesize);
  }

  //GET POST WITH ID
  @Get('/detail')
  public async getPostById(@Query(`id`) id: string) {
    return await this.PostService.getPostById(id);
  }

  @Get('/suggest')
  public async getPostByTitle(@Query(`title`) title: string) {
    return await this.PostService.getPostByTitle(title);
  }

  @Post('/add')
  @UseInterceptors(
    FilesInterceptor('images', 5, {
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
  public async createPost(
    @Body() post: Schema.Post,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    if (post.title == '') {
      throw new HttpException(
        'Please enter field required',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!files || files.length == 0) {
      throw new HttpException(
        'Please choose at least one picture!',
        HttpStatus.BAD_REQUEST,
      );
    }

    let _imagePath: Array<ImagePost> = [];
    for (let i = 0; i < files.length; i++) {
      let pathImage = await this.CloudiaryService.uploadImage(files[i]);
      _imagePath.push({
        url: pathImage.url,
        // hashTag: await this.nudePost(files[i]) // safe neu safe test < 0.7;
        hashTag: 'Warning 18+', // safe neu safe test < 0.7;
      });
    }

    post.images = _imagePath;
    post.coverImage = _imagePath[0].url;
    let postSave = await this.PostService.createPost(post);
    return {
      message: 'Created Post Successfully!!!',
      data: postSave,
    };
  }

  //UPDATE POST
  @Put('/update')
  public async updatePost(@Query(`id`) id: string, @Body() post: Schema.Post) {
    return await this.PostService.updatePost(id, post);
  }

  //DELETE POST
  @Delete('/delete')
  public async deletePost(@Query(`id`) id: string) {
    return await this.PostService.deletePost(id);
  }

  //TEST UPLOAD FILES
  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('images', 5, {
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
  async uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    for (let i = 0; i < files.length; i++) {
      let pathImage = await this.CloudiaryService.uploadImage(files[i]);
      console.log(pathImage.url);
    }
  }


}
