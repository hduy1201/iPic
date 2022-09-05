import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagModel } from 'src/models/tag.model';
import { tag } from 'src/schemas/tag.schema';
import { TagService } from '../../services/tag/tag.service'


@Controller('tag')
export class TagController {
    constructor(
        private TagService: TagService
    ) { }

    @Get('get-all')
    getAll() {
        return this.TagService.findAll();
    }
    @Post('create')
    create(@Body() tag: any) {
        return this.TagService.create(tag);
    }
}
