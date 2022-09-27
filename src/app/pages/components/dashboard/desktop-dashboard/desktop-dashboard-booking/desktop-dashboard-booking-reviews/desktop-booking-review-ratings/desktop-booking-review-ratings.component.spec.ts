import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBookingReviewRatingsComponent } from './desktop-booking-review-ratings.component';

describe('DesktopBookingReviewRatingsComponent', () => {
  let component: DesktopBookingReviewRatingsComponent;
  let fixture: ComponentFixture<DesktopBookingReviewRatingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookingReviewRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookingReviewRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
