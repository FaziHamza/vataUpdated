import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPopularMarketplaceComponent } from './desktop-popular-marketplace.component';

describe('DesktopPopularMarketplaceComponent', () => {
  let component: DesktopPopularMarketplaceComponent;
  let fixture: ComponentFixture<DesktopPopularMarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPopularMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPopularMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
