import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplacePopularGoodsComponent } from './marketplace-popular-goods.component';

describe('MarketplacePopularGoodsComponent', () => {
  let component: MarketplacePopularGoodsComponent;
  let fixture: ComponentFixture<MarketplacePopularGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplacePopularGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplacePopularGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
