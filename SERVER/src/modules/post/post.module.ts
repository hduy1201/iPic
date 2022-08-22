import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from 'src/controllers/post/post.controller';
import { PostService } from 'src/services/post/post.service';
import { Post, PostDocument, PostSchema } from 'src/schemas/post.schema';
import { UserModule } from '../user/user.module';
import { NudenetMiddleware } from '../../middlewares/nudenet.middleware';
import { CloudiaryModule } from '../cloudiary/cloudiary.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    UserModule,
    CloudiaryModule,
  ],
  controllers: [PostController],
  providers: [PostService],
  exports: [],
})
export class PostModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(NudenetMiddleware)
      .forRoutes(
      // {
      //     path: '/post/test-nudenet', method: RequestMethod.POST
      // }
    );
  }
}
