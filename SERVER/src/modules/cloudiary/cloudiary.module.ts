import { Module } from '@nestjs/common';
import { CloudiaryService } from 'src/services/cloudiary/cloudiary.service';

@Module({
  providers: [CloudiaryService],
  exports: [CloudiaryService],
})
export class CloudiaryModule { }
