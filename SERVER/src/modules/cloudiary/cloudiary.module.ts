import { Module } from '@nestjs/common';
import { CloudinaryProvider } from 'src/providers/cloudiary.provider';
import { CloudiaryService } from 'src/services/cloudiary/cloudiary.service';

@Module({
  providers: [CloudinaryProvider, CloudiaryService],
  exports: [CloudinaryProvider, CloudiaryService],
})
export class CloudiaryModule {}
