import { TestBed } from '@angular/core/testing';

import { CongviecService } from './congviec.service';

describe('CongviecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CongviecService = TestBed.get(CongviecService);
    expect(service).toBeTruthy();
  });
});
