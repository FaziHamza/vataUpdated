import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopBookingConfirmVisitComponent } from './desktop-booking-confirm-visit.component';

describe('DesktopBookingConfirmVisitComponent', () => {
  let component: DesktopBookingConfirmVisitComponent;
  let fixture: ComponentFixture<DesktopBookingConfirmVisitComponent>;

  beforeEach(async(() => {
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
