import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from 'src/controllers/post/post.controller';
import { PostService } from 'src/services/post/post.service';
import { Post, PostDocument, PostSchema } from 'src/schemas/post.schema';
import { UserModule } from '../user/user.module';
@Module({
    imports: [
        MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
        UserModule
    ],
    controllers: [PostController],
    providers: [PostService],
    exports: [

    ]
})
export class PostModule { }
