import { TestBed } from '@angular/core/testing';

import { FoodCalenderService } from './food-calender.service';

describe('FoodCalenderService', () => {
  let service: FoodCalenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodCalenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
