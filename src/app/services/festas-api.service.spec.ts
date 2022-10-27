import { TestBed } from '@angular/core/testing';

import { FestasApiService } from './festas-api.service';

describe('FestasApiService', () => {
  let service: FestasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
