import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopBookingNewVisitComponent } from './desktop-booking-new-visit.component';

describe('DesktopBookingNewVisitComponent', () => {
  let component: DesktopBookingNewVisitComponent;
  let fixture: ComponentFixture<DesktopBookingNewVisitComponent>;

  beforeEach(async(() => {
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
