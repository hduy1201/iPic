import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from 'src/controllers/post/post.controller';
import { PostService } from 'src/services/post/post.service';
import {  Post, PostDocument, PostSchema} from 'src/schemas/post.schema';
@Module({
    imports: [
        MongooseModule.forFeature([{ name: Post.name, schema: PostSchema}]),
    ],
    controllers:[PostController],
    providers: [PostService]
})
export class PostModule {}
