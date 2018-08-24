import { TestBed, inject } from '@angular/core/testing';

import { HerbimageService } from './herbimage.service';

describe('HerbimageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerbimageService]
    });
  });

  it('should be created', inject([HerbimageService], (service: HerbimageService) => {
    expect(service).toBeTruthy();
  }));
});
