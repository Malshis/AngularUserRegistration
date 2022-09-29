import { TestBed } from '@angular/core/testing';

import { ExternalserviceService } from './externalservice.service';

describe('ExternalserviceService', () => {
  let service: ExternalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
