import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSellerBookingComponent } from './desktop-seller-booking.component';

describe('DesktopSellerBookingComponent', () => {
  let component: DesktopSellerBookingComponent;
  let fixture: ComponentFixture<DesktopSellerBookingComponent>;

  beforeEach(async(() => {
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
