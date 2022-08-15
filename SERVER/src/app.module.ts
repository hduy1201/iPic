import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalModule } from './modules/animal/animal.module';
@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.eai7qjd.mongodb.net/iPic?retryWrites=true&w=majority"),
    AnimalModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
