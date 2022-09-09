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

    @Get('suggestion')
    async getSuggestion() {
        return await this.TagService.findSuggestion();
    }

    @Post('create')
    create(@Body() tag: any) {
        return this.TagService.create(tag);
    }

    @Get('get-with-name/:name')
    async getByName(@Param('name') name: string) {
        return await this.TagService.findByName(name);
    }

    @Get('test')
    async getTest() {
        return await this.TagService.findAll();
    }
}
