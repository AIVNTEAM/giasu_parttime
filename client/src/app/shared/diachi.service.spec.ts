import { TestBed } from '@angular/core/testing';

import { DiachiService } from './diachi.service';

describe('DiachiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiachiService = TestBed.get(DiachiService);
    expect(service).toBeTruthy();
  });
});
