import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopMakeBookingOutletComponent } from './desktop-make-booking-outlet.component';

describe('DesktopMakeBookingOutletComponent', () => {
  let component: DesktopMakeBookingOutletComponent;
  let fixture: ComponentFixture<DesktopMakeBookingOutletComponent>;

  beforeEach(async(() => {
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
