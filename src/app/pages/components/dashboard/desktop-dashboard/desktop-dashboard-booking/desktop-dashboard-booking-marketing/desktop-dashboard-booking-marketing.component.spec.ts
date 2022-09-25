import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardBookingMarketingComponent } from './desktop-dashboard-booking-marketing.component';

describe('DesktopDashboardBookingMarketingComponent', () => {
  let component: DesktopDashboardBookingMarketingComponent;
  let fixture: ComponentFixture<DesktopDashboardBookingMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardBookingMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardBookingMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
