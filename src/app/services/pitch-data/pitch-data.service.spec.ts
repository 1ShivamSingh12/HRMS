import { TestBed } from '@angular/core/testing';

import { PitchDataService } from './pitch-data.service';

describe('PitchDataService', () => {
  let service: PitchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PitchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
