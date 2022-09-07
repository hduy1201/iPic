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
import { PostService } from 'src/services/post/post.service';
import { UserService } from 'src/services/user/user.service';
import * as Schema from 'src/schemas/post.schema';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from '../../utils/multerOptions';
import { handlePostService } from './handlePost'
@Controller('post')
export class PostController {
  constructor(
    private PostService: PostService,
    private UserService: UserService,
    private handlePost: handlePostService
  ) { }

  //GET ALL POSTS
  @Get('/')
  public async testPost(
    @Query('page') page: number,
    @Query('pagesize') pagesize: number,
    @Req() req: any
  ) {
    // const userEmail = req.payload.email;

    return await this.PostService.getAllPosts(page, pagesize, 'trong.phamtranduc@gmail.com');
  }

  //GET POST WITH ID
  @Get('/detail')
  public async getPostById(@Query(`id`) id: string) {
    return await this.PostService.getPostById(id);
  }

  //SUGGEST POSTS
  @Get('/suggest')
  public async getPostByTitle(
    @Query(`title`) title: string,
    @Query('page') page: number,
    @Query('pagesize') pagesize: number
  ) {
    return await this.PostService.getPostByTitle(title, page, pagesize);
  }

  //CREATE POST
  @Post('/add')
  @UseInterceptors(FilesInterceptor('images', 5, multerOptions))
  public async createPost(
    @Body() post: Schema.Post,
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Req() req: any,
  ) {

    console.log(post);

    //MIDDLEWARE JWT
    const payload = req.payload;

    const EMAIL = "trong.phamtranduc@gmail.com" //JUST FOR TEST

    let user: any = await this.UserService.findUserByEmail(EMAIL);

    if (!user) {
      this.handlePost.isValidUser();
    }

    if (post.title == '') {
      this.handlePost.checkValidate();
    }
    if (!files || files.length == 0) {
      this.handlePost.isValidImages();
    }

    const images = await this.handlePost.uploadImages(files);

    post.images = images;
    post.coverImage = images[0].url;
    post.authorId = user._id;

    const postSave: any = await this.PostService.createPost(post);

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
}
