import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardBookingComponent } from './desktop-dashboard-booking.component';

describe('DesktopDashboardBookingComponent', () => {
  let component: DesktopDashboardBookingComponent;
  let fixture: ComponentFixture<DesktopDashboardBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
