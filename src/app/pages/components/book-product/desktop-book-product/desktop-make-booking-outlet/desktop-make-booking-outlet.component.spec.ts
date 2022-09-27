import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopMakeBookingOutletComponent } from './desktop-make-booking-outlet.component';

describe('DesktopMakeBookingOutletComponent', () => {
  let component: DesktopMakeBookingOutletComponent;
  let fixture: ComponentFixture<DesktopMakeBookingOutletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopMakeBookingOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopMakeBookingOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
