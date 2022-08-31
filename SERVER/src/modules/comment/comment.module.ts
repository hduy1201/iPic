import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CommentController } from "src/controllers/comment/comment.controller";
import { Comment, CommentSchema } from "src/schemas/comment.schema";
import { CommentService } from "src/services/comment/comment.service";
import { CloudiaryModule } from "../cloudiary/cloudiary.module";
import { UserModule } from "../user/user.module";

@Module ({
    imports: [
        MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
        UserModule,
        CloudiaryModule,
    ],
    controllers: [ CommentController ],
    providers: [ CommentService ],
    exports: [ ],

})
export class CommentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply()
            .forRoutes(
                // {
                //     path: '/post/test-nudenet', method: RequestMethod.POST
                // }
            );
    }
}