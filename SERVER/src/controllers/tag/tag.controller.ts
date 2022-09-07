import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

    @Get('get-by-name')
    async getByName(@Body() body: any) {
        return await this.TagService.findByName(body.name);
    }

    @Get('test')
    async getTest() {
        return await this.TagService.findAll();
    }
}
