import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSellerBookingOutletComponent } from './desktop-seller-booking-outlet.component';

describe('DesktopSellerBookingOutletComponent', () => {
  let component: DesktopSellerBookingOutletComponent;
  let fixture: ComponentFixture<DesktopSellerBookingOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopSellerBookingOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSellerBookingOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
