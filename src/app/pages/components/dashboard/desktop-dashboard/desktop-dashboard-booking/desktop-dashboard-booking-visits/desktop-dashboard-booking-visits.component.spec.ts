import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardBookingVisitsComponent } from './desktop-dashboard-booking-visits.component';

describe('DesktopDashboardBookingVisitsComponent', () => {
  let component: DesktopDashboardBookingVisitsComponent;
  let fixture: ComponentFixture<DesktopDashboardBookingVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardBookingVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardBookingVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
