import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBookingConfirmVisitComponent } from './desktop-booking-confirm-visit.component';

describe('DesktopBookingConfirmVisitComponent', () => {
  let component: DesktopBookingConfirmVisitComponent;
  let fixture: ComponentFixture<DesktopBookingConfirmVisitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookingConfirmVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookingConfirmVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
