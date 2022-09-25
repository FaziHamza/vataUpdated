import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePopularMarketplaceComponent } from './mobile-popular-marketplace.component';

describe('MobilePopularMarketplaceComponent', () => {
  let component: MobilePopularMarketplaceComponent;
  let fixture: ComponentFixture<MobilePopularMarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePopularMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePopularMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
