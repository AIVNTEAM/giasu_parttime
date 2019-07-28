import { TestBed } from '@angular/core/testing';

import { ViecService } from './viec.service';

describe('ViecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViecService = TestBed.get(ViecService);
    expect(service).toBeTruthy();
  });
});
