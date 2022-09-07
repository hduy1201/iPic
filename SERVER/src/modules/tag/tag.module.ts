import { Module, Post } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagController } from 'src/controllers/tag/tag.controller';
import { PostSchema } from 'src/schemas/post.schema';
import { Tag, TagSchema } from 'src/schemas/tag.schema';
import { User, UserSchema } from 'src/schemas/user.schema';
import { TagService } from 'src/services/tag/tag.service';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                { name: Tag.name, schema: TagSchema },
                { name: Post.name, schema: PostSchema },
                { name: User.name, schema: UserSchema }
            ]
        )
    ],
    controllers: [TagController],
    providers: [TagService],
    exports: [TagService]
})
export class TagModule { }
