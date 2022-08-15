import { Controller, Get } from '@nestjs/common';
import { AnimalService } from 'src/services/animal/animal.service';

@Controller('animal')
export class AnimalController {
    constructor(private animalService: AnimalService) { }

    @Get('get-all')
    async getAnimals() {
        return await this.animalService.getAnimals();
    }

}
