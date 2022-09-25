import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceSearchViewComponent } from './marketplace-search-view.component';

describe('MarketplaceSearchViewComponent', () => {
  let component: MarketplaceSearchViewComponent;
  let fixture: ComponentFixture<MarketplaceSearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceSearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
