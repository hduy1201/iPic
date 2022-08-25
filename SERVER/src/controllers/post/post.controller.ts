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
import { User } from 'src/models/user.model';
const imageToBase64 = require('image-to-base64');
import axios from 'axios';
import { NudeNet } from 'src/models/nude.model';
import { storage } from 'src/helpers/storage.helper';
import {
  FileInterceptor,
  FilesInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CloudiaryService } from 'src/services/cloudiary/cloudiary.service';
import { ImagePost } from 'src/models/imageNude.model';
import * as path from 'path';
@Controller('post')
export class PostController {
  constructor(
    private PostService: PostService,
    private CloudiaryService: CloudiaryService,
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
    if (!files) {
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
        hashTag: await this.nudePost(files[i]) // safe neu safe test < 0.7;
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
    // console.log(files);
    for (let i = 0; i < files.length; i++) {
      let pathImage = await this.CloudiaryService.uploadImage(files[i]);
      console.log(pathImage.url);
    }
  }

  public async nudePost(file) {

    // const _imagePath = path.join(__dirname, `../../../uploads/images/macdobth2.png`);
    const _imagePath = path.join(__dirname, `../../../uploads/images/${file.filename}`);

    console.log(_imagePath);

    let image = await imageToBase64(
      _imagePath
    );

    let request = {
      data: {},
    };

    request.data['undefined'] = image;
    try {
      let result: NudeNet = await (
        await axios.post('http://localhost:8080/sync', request)
      ).data;

      console.log(result);

      if (result.prediction.undefined.unsafe > 0.7) {
        return "Warning 18+";
      } else {
        return "Safe";
      }
    } catch (error) {
      return error;
    }
  }

  @Post('/test-nude')
  public async testNude() {
    // const _imagePath = path.join(__dirname, `../../../uploads/images/macdobth2.png`);
    const _imagePath = path.join(__dirname, `../../../uploads/images/macdobth.jpg`);

    console.log(_imagePath);

    let image = await imageToBase64(
      _imagePath
    );

    let request = {
      data: {},
    };

    request.data['undefined'] = image;
    try {
      let result: NudeNet = await (
        await axios.post('http://localhost:8080/sync', request)
      ).data;

      console.log(result);

      if (result.prediction.undefined.unsafe > 0.7) {
        return {
          message: "Warning 18+"
        }
      } else {
        return {
          message: "Safe"
        }
      }
    } catch (error) {
      return error;
    }
  }

}
