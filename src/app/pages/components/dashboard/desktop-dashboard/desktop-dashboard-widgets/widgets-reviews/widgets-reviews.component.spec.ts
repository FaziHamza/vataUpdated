import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetsReviewsComponent } from './widgets-reviews.component';

describe('WidgetsReviewsComponent', () => {
  let component: WidgetsReviewsComponent;
  let fixture: ComponentFixture<WidgetsReviewsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
