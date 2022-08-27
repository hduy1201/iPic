import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagController } from 'src/controllers/tag/tag.controller';
import { tag, TagSchema } from 'src/schemas/tag.schema';
import { TagService } from 'src/services/tag/tag.service';

@Module({
    imports: [ 
        MongooseModule.forFeature([{ name: tag.name, schema: TagSchema }])
    ],
    controllers: [TagController],
    providers: [TagService],
})
export class TagModule {}
