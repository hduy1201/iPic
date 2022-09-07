import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalController } from 'src/controllers/animal/animal.controller';
import { AnimalService } from 'src/services/animal/animal.service';
import { MongoModule } from '../mongoose.module';

@Module({
  imports: [
    MongoModule
  ],
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule { }
