import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCustomerReviewsComponent } from './mobile-customer-reviews.component';

describe('MobileCustomerReviewsComponent', () => {
  let component: MobileCustomerReviewsComponent;
  let fixture: ComponentFixture<MobileCustomerReviewsComponent>;

  beforeEach(async(() => {
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
