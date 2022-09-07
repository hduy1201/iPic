import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Animal, AnimalSchema } from 'src/schemas/animal.schema';
import { Comment, CommentSchema } from 'src/schemas/comment.schema';
import { Post, PostSchema } from 'src/schemas/post.schema';
import { Tag, TagSchema } from 'src/schemas/tag.schema';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Animal.name, schema: AnimalSchema },
            { name: User.name, schema: UserSchema },
            { name: Post.name, schema: PostSchema },
            { name: Tag.name, schema: TagSchema },
            { name: Comment.name, schema: CommentSchema }
        ]),
    ],
    exports: [
        MongooseModule.forFeature([
            { name: Animal.name, schema: AnimalSchema },
            { name: User.name, schema: UserSchema },
            { name: Post.name, schema: PostSchema },
            { name: Tag.name, schema: TagSchema },
            { name: Comment.name, schema: CommentSchema }
        ]),
    ]
})
export class MongoModule { }
