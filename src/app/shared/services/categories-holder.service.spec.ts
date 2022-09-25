import { TestBed } from '@angular/core/testing';

import { CategoriesHolderService } from './categories-holder.service';

describe('CategoriesHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriesHolderService = TestBed.get(CategoriesHolderService);
    expect(service).toBeTruthy();
  });
});
