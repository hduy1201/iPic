import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalModule } from './modules/animal/animal.module';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { AuthService } from './services/auth/auth.service';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { MulterModule } from '@nestjs/platform-express';
import { CloudiaryService } from './services/cloudiary/cloudiary.service';
import { CloudiaryModule } from './modules/cloudiary/cloudiary.module';
import { CommentModule } from './modules/comment/comment.module';
import { TagModule } from './modules/tag/tag.module';
import { ShareModule } from './modules/share.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/iPic"),
    // MongooseModule.forRoot(
    //   'mongodb+srv://admin:admin@cluster0.eai7qjd.mongodb.net/iPic?retryWrites=true&w=majority',
    // ),
    AnimalModule,
    PostModule,
    CommentModule,
    UserModule,
    MulterModule.register({ dest: './uploads/images' }),
    CloudiaryModule,
    TagModule,
    ShareModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, CloudiaryService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      // {
      //   path: '/post/:id',
      //   method: RequestMethod.POST,
      // },
      {
        path: 'post/add',
        method: RequestMethod.POST,
      },
      {
        path: '/comment/create-comment',
        method: RequestMethod.POST,
      },
      // {
      //   path: '/post/delete',
      //   method: RequestMethod.DELETE,
      // },
      // {
      //   path: '/user/all',
      //   method: RequestMethod.GET,
      // },
      // {
      //   path: '/user/:id',
      //   method: RequestMethod.GET,
      // },
      // {
      //   path: '/user/register',
      //   method: RequestMethod.POST,
      // },
      // {
      //   path: '/user/update',
      //   method: RequestMethod.PUT,
      // }
      {
        path: '/user/save-interests',
        method: RequestMethod.PUT,
      },
      {
        path: '/post',
        method: RequestMethod.GET,
      }
    );
  }
}
