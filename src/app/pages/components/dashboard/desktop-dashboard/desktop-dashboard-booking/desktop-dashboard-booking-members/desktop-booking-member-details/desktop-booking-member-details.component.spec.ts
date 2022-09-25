import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopBookingMemberDetailsComponent } from './desktop-booking-member-details.component';

describe('DesktopBookingMemberDetailsComponent', () => {
  let component: DesktopBookingMemberDetailsComponent;
  let fixture: ComponentFixture<DesktopBookingMemberDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookingMemberDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookingMemberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
