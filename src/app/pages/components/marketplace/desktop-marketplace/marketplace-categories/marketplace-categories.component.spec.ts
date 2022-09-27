import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarketplaceCategoriesComponent } from './marketplace-categories.component';

describe('MarketplaceCategoriesComponent', () => {
  let component: MarketplaceCategoriesComponent;
  let fixture: ComponentFixture<MarketplaceCategoriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
