import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileMakeBookingComponent } from './mobile-make-booking.component';

describe('MobileMakeBookingComponent', () => {
  let component: MobileMakeBookingComponent;
  let fixture: ComponentFixture<MobileMakeBookingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMakeBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMakeBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
