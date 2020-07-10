import { TestBed } from '@angular/core/testing';

import { MobileAdjustsService } from './mobile-adjusts.service';

describe('MobileAdjustsService', () => {
  let service: MobileAdjustsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileAdjustsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
