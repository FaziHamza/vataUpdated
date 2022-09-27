import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopMakeBookingComponent } from './desktop-make-booking.component';

describe('DesktopMakeBookingComponent', () => {
  let component: DesktopMakeBookingComponent;
  let fixture: ComponentFixture<DesktopMakeBookingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopMakeBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopMakeBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
