import { Module, Post } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagController } from 'src/controllers/tag/tag.controller';
import { PostSchema } from 'src/schemas/post.schema';
import { Tag, TagSchema } from 'src/schemas/tag.schema';
import { TagService } from 'src/services/tag/tag.service';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                { name: Tag.name, schema: TagSchema },
                { name: Post.name, schema: PostSchema }
            ]
        )
    ],
    controllers: [TagController],
    providers: [TagService],
    exports: [TagService]
})
export class TagModule { }
