import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/controllers/user/user.controller';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { NudenetMiddleware } from 'src/middlewares/nudenet.middleware';
import { User, UserSchema } from 'src/schemas/user.schema';
import { UserService } from 'src/services/user/user.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule { }
