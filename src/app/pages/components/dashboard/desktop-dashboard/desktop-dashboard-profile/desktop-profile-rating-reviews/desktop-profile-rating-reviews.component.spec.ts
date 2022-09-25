import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopProfileRatingReviewsComponent } from './desktop-profile-rating-reviews.component';

describe('DesktopProfileRatingReviewsComponent', () => {
  let component: DesktopProfileRatingReviewsComponent;
  let fixture: ComponentFixture<DesktopProfileRatingReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopProfileRatingReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopProfileRatingReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
