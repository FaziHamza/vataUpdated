import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceCardListViewComponent } from './marketplace-card-list-view.component';

describe('MarketplaceCardListViewComponent', () => {
  let component: MarketplaceCardListViewComponent;
  let fixture: ComponentFixture<MarketplaceCardListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceCardListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceCardListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
