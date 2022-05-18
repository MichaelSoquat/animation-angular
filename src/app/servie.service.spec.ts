import { TestBed } from '@angular/core/testing';

import { ServieService } from './servie.service';

describe('ServieService', () => {
  let service: ServieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
