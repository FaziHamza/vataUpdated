import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardBookingOutletComponent } from './desktop-dashboard-booking-outlet.component';

describe('DesktopDashboardBookingOutletComponent', () => {
  let component: DesktopDashboardBookingOutletComponent;
  let fixture: ComponentFixture<DesktopDashboardBookingOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardBookingOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardBookingOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
