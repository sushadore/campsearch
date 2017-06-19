import { TestBed, inject } from '@angular/core/testing';

import { CampgroundService } from './campground.service';

describe('CampgroundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampgroundService]
    });
  });

  it('should be created', inject([CampgroundService], (service: CampgroundService) => {
    expect(service).toBeTruthy();
  }));
});
