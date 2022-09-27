import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarketplacePopularGoodsMobileComponent } from './marketplace-popular-goods-mobile.component';

describe('MarketplacePopularGoodsMobileComponent', () => {
  let component: MarketplacePopularGoodsMobileComponent;
  let fixture: ComponentFixture<MarketplacePopularGoodsMobileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplacePopularGoodsMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplacePopularGoodsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
