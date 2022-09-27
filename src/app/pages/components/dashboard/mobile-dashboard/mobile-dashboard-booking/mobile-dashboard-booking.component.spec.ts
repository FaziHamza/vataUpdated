import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileDashboardBookingComponent } from './mobile-dashboard-booking.component';

describe('MobileDashboardBookingComponent', () => {
  let component: MobileDashboardBookingComponent;
  let fixture: ComponentFixture<MobileDashboardBookingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDashboardBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDashboardBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
