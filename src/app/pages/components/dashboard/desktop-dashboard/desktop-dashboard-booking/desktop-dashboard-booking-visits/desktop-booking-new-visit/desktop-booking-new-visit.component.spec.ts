import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBookingNewVisitComponent } from './desktop-booking-new-visit.component';

describe('DesktopBookingNewVisitComponent', () => {
  let component: DesktopBookingNewVisitComponent;
  let fixture: ComponentFixture<DesktopBookingNewVisitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookingNewVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookingNewVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
