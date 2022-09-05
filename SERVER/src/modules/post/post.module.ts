import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from 'src/controllers/post/post.controller';
import { PostService } from 'src/services/post/post.service';
import { Post, PostDocument, PostSchema } from 'src/schemas/post.schema';
import { UserModule } from '../user/user.module';
import { NudenetMiddleware } from '../../middlewares/nudenet.middleware';
import { CloudiaryModule } from '../cloudiary/cloudiary.module';
import { NudeNetClass } from 'src/helpers/nudenet.helper';
import { AuthService } from 'src/services/auth/auth.service';
import { handlePostService } from 'src/controllers/post/handlePost';
import { TagService } from 'src/services/tag/tag.service';
import { TagModule } from '../tag/tag.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    UserModule,
    CloudiaryModule,
    TagModule
  ],
  controllers: [PostController],
  providers: [
    PostService,
    NudeNetClass,
    AuthService,
    handlePostService,
  ],
  exports: [
    handlePostService
  ],
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
