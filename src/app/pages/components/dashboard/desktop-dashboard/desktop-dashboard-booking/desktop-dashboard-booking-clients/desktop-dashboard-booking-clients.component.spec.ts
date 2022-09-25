import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardBookingClientsComponent } from './desktop-dashboard-booking-clients.component';

describe('DesktopDashboardBookingClientsComponent', () => {
  let component: DesktopDashboardBookingClientsComponent;
  let fixture: ComponentFixture<DesktopDashboardBookingClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardBookingClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardBookingClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
