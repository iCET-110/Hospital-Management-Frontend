import { TestBed } from '@angular/core/testing';

import { PrescriptionserviceService } from './prescriptionservice.service';

describe('PrescriptionserviceService', () => {
  let service: PrescriptionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
