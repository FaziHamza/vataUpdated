import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopSellerBookingComponent } from './desktop-seller-booking.component';

describe('DesktopSellerBookingComponent', () => {
  let component: DesktopSellerBookingComponent;
  let fixture: ComponentFixture<DesktopSellerBookingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopSellerBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSellerBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
