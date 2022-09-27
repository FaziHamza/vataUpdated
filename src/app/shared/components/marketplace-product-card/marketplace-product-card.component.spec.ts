import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarketplaceProductCardComponent } from './marketplace-product-card.component';

describe('MarketplaceProductCardComponent', () => {
  let component: MarketplaceProductCardComponent;
  let fixture: ComponentFixture<MarketplaceProductCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
