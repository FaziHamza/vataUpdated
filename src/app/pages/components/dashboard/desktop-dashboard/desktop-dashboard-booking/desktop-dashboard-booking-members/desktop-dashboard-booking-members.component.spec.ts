import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardBookingMembersComponent } from './desktop-dashboard-booking-members.component';

describe('DesktopDashboardBookingMembersComponent', () => {
  let component: DesktopDashboardBookingMembersComponent;
  let fixture: ComponentFixture<DesktopDashboardBookingMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardBookingMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardBookingMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
