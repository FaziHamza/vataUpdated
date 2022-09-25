import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardBookingSettingsComponent } from './desktop-dashboard-booking-settings.component';

describe('DesktopDashboardBookingSettingsComponent', () => {
  let component: DesktopDashboardBookingSettingsComponent;
  let fixture: ComponentFixture<DesktopDashboardBookingSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardBookingSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardBookingSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
