import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarketplaceCategoriesMobileComponent } from './marketplace-categories-mobile.component';

describe('MarketplaceCategoriesMobileComponent', () => {
  let component: MarketplaceCategoriesMobileComponent;
  let fixture: ComponentFixture<MarketplaceCategoriesMobileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceCategoriesMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceCategoriesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
