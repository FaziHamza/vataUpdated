import { TestBed } from '@angular/core/testing';

import { DataHoldingService } from './data-holding.service';

describe('DataHoldingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataHoldingService = TestBed.get(DataHoldingService);
    expect(service).toBeTruthy();
  });
});
