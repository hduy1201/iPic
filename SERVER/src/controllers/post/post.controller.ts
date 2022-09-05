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
import { CloudiaryService } from 'src/services/cloudiary/cloudiary.service';
import { ImagePost } from 'src/models/imageNude.model';
import { multerOptions } from '../../utils/multerOptions';
@Controller('post')
export class PostController {
  constructor(
    private PostService: PostService,
    private CloudiaryService: CloudiaryService,
    private UserService: UserService,
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
  public async getPostByTitle(
    @Query(`title`) title: string,
    @Query('page') page: number,
    @Query('pagesize') pagesize: number
  ) {
    return await this.PostService.getPostByTitle(title, page, pagesize);
  }

  @Post('/add')
  @UseInterceptors(FilesInterceptor('images', 5, multerOptions))
  public async createPost(
    @Body() post: Schema.Post,
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Req() req: any,
  ) {
    const payload = req.payload;
    let user: any = await this.UserService.findUserByEmail(payload.email);
    if (!user) return;

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

    const RATE_TEST = 0.7; //safe neu safe test < 0.7;

    for (let i = 0; i < files.length; i++) {
      let pathImage = await this.CloudiaryService.uploadImage(files[i]);
      _imagePath.push({
        url: pathImage.url,
        // hashTag: await this.nudePost(files[i])
        hashTag: 'Warning 18+',
      });
    }

    post.images = _imagePath;
    post.coverImage = _imagePath[0].url;
    post.authorId = user._id;

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
}
