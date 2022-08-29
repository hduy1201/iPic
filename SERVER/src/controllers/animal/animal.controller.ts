import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AnimalService } from 'src/services/animal/animal.service';
// import { AuthService } from 'src/services/auth/auth.service';

@Controller('animal')
export class AnimalController {
  constructor(
    private animalService: AnimalService,
    // private authService: AuthService,
  ) { }

  @Get('/get-all')
  async getAnimals() {
    return await this.animalService.getAnimals();
  }

  //for test idToken
  @Post('/send')
  public async send(@Body() body: any, @Request() req: any) {
    console.log(body);
    // return await this.animalService.create(body);
  }
}
