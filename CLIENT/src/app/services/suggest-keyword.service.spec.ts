import { TestBed } from '@angular/core/testing';

import { SuggestKeywordService } from './suggest-keyword.service';

describe('SuggestKeywordService', () => {
  let service: SuggestKeywordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuggestKeywordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
