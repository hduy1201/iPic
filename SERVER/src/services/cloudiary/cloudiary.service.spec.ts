import { Test, TestingModule } from '@nestjs/testing';
import { CloudiaryService } from './cloudiary.service';

describe('CloudiaryService', () => {
  let service: CloudiaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CloudiaryService],
    }).compile();

    service = module.get<CloudiaryService>(CloudiaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
