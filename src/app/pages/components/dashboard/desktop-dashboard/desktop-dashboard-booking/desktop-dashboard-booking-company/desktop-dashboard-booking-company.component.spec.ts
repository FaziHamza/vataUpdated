import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardBookingCompanyComponent } from './desktop-dashboard-booking-company.component';

describe('DesktopDashboardBookingCompanyComponent', () => {
  let component: DesktopDashboardBookingCompanyComponent;
  let fixture: ComponentFixture<DesktopDashboardBookingCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardBookingCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardBookingCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
