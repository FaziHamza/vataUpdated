import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopAllReviewsComponent } from './desktop-all-reviews.component';

describe('DesktopAllReviewsComponent', () => {
  let component: DesktopAllReviewsComponent;
  let fixture: ComponentFixture<DesktopAllReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopAllReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopAllReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
