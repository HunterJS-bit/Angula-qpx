import { TestBed, inject } from '@angular/core/testing';

import { QpxService } from './qpx.service';

describe('QpxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QpxService]
    });
  });

  it('should ...', inject([QpxService], (service: QpxService) => {
    expect(service).toBeTruthy();
  }));
});
