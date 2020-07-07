import { TestBed } from '@angular/core/testing';

import { LocationDataService } from './location-data.service';

describe('LocationDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationDataService = TestBed.get(LocationDataService);
    expect(service).toBeTruthy();
  });
});
