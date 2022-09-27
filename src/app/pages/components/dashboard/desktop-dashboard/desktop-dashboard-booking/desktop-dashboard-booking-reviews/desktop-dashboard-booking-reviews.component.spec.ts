import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopDashboardBookingReviewsComponent } from './desktop-dashboard-booking-reviews.component';

describe('DesktopDashboardBookingReviewsComponent', () => {
  let component: DesktopDashboardBookingReviewsComponent;
  let fixture: ComponentFixture<DesktopDashboardBookingReviewsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardBookingReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardBookingReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
