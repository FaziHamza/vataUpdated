import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import CheckoutFeesToPayComponent from './checkout-fees-to-pay.component';

describe('CheckoutFeesToPayComponent', () => {
  let component: CheckoutFeesToPayComponent;
  let fixture: ComponentFixture<CheckoutFeesToPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutFeesToPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutFeesToPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
