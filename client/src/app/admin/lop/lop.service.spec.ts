import { TestBed } from '@angular/core/testing';

import { LopService } from './lop.service';

describe('LopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LopService = TestBed.get(LopService);
    expect(service).toBeTruthy();
  });
});
