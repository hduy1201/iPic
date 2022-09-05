import { Module } from '@nestjs/common';
import { handlePostService } from 'src/controllers/post/handlePost';
import { CloudiaryModule } from './cloudiary/cloudiary.module';
import { TagModule } from './tag/tag.module';


@Module({
    imports: [
        TagModule
    ],
    controllers: [],
    providers: [],
    exports: [
    ]
})
export class ShareModule { }
