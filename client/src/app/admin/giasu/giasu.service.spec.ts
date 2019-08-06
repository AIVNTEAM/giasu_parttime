import { TestBed } from '@angular/core/testing';

import { GiasuService } from './giasu.service';

describe('GiasuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiasuService = TestBed.get(GiasuService);
    expect(service).toBeTruthy();
  });
});
