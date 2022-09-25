import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFeesToPayNegativePaymentComponent } from './dashboard-fees-to-pay-negative-payment.component';

describe('DashboardFeesToPayNegativePaymentComponent', () => {
  let component: DashboardFeesToPayNegativePaymentComponent;
  let fixture: ComponentFixture<DashboardFeesToPayNegativePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFeesToPayNegativePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFeesToPayNegativePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
