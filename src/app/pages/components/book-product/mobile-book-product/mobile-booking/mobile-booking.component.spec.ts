import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileBookingComponent } from './mobile-booking.component';

describe('MobileBookingComponent', () => {
  let component: MobileBookingComponent;
  let fixture: ComponentFixture<MobileBookingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
