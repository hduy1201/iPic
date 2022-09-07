import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CommentController } from "src/controllers/comment/comment.controller";
import { CommentService } from "src/services/comment/comment.service";
import { CloudiaryModule } from "../cloudiary/cloudiary.module";
import { MongoModule } from "../mongoose.module";
import { UserModule } from "../user/user.module";

@Module({
    imports: [
        MongoModule,
        UserModule,
        CloudiaryModule,
    ],
    controllers: [CommentController],
    providers: [CommentService],
    exports: [],

})
export class CommentModule { }