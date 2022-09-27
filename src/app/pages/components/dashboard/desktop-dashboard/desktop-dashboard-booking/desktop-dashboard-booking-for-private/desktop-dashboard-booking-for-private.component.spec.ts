import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopDashboardBookingForPrivateComponent } from './desktop-dashboard-booking-for-private.component';

describe('DesktopDashboardBookingForPrivateComponent', () => {
  let component: DesktopDashboardBookingForPrivateComponent;
  let fixture: ComponentFixture<DesktopDashboardBookingForPrivateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardBookingForPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardBookingForPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
