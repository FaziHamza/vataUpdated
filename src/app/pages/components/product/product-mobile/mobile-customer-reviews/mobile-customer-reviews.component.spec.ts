import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileCustomerReviewsComponent } from './mobile-customer-reviews.component';

describe('MobileCustomerReviewsComponent', () => {
  let component: MobileCustomerReviewsComponent;
  let fixture: ComponentFixture<MobileCustomerReviewsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCustomerReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCustomerReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
