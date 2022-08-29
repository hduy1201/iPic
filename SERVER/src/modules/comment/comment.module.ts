import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CommentSchema } from "src/schemas/comment.schema";
import { CloudiaryModule } from "../cloudiary/cloudiary.module";
import { UserModule } from "../user/user.module";

@Module ({
    imports: [
        MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
        UserModule,
        CloudiaryModule,
    ],
    controllers: [],
    providers: [],
    exports: [],

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