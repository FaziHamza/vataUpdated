import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopCustomerReviewsComponent } from './desktop-customer-reviews.component';

describe('DesktopCustomerReviewsComponent', () => {
  let component: DesktopCustomerReviewsComponent;
  let fixture: ComponentFixture<DesktopCustomerReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopCustomerReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopCustomerReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
