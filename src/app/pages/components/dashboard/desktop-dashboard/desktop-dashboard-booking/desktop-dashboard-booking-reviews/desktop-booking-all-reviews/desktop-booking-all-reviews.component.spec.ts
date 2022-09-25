import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopBookingAllReviewsComponent } from './desktop-booking-all-reviews.component';

describe('DesktopBookingAllReviewsComponent', () => {
  let component: DesktopBookingAllReviewsComponent;
  let fixture: ComponentFixture<DesktopBookingAllReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookingAllReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookingAllReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
