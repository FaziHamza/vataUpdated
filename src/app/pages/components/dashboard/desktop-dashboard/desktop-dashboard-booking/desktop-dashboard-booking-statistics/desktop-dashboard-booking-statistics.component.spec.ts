import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardBookingStatisticsComponent } from './desktop-dashboard-booking-statistics.component';

describe('DesktopDashboardBookingStatisticsComponent', () => {
  let component: DesktopDashboardBookingStatisticsComponent;
  let fixture: ComponentFixture<DesktopDashboardBookingStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardBookingStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardBookingStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
