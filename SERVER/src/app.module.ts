import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalModule } from './modules/animal/animal.module';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { AuthService } from './services/auth/auth.service';
import { UserModule } from './modules/user/user.module';
import { PostController } from './controllers/post/post.controller';
import { PostService } from './services/post/post.service';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.eai7qjd.mongodb.net/iPic?retryWrites=true&w=majority"),
    AnimalModule,
    PostModule,
    UserModule
  ],
  controllers: [AppController, ],
  providers: [AppService, AuthService, ],
})
export class AppModule implements NestModule { 
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      // {
      //   path: '/post/:id',
      //   method: RequestMethod.POST,
      // },
      // {
      //   path: 'post/add',
      //   method: RequestMethod.POST,
      // },
      // {
      //   path: '/post/update',
      //   method: RequestMethod.PUT,
      // },
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
    );
  }
}
