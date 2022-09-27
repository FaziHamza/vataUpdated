import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBookingNewMemberComponent } from './desktop-booking-new-member.component';

describe('DesktopBookingNewMemberComponent', () => {
  let component: DesktopBookingNewMemberComponent;
  let fixture: ComponentFixture<DesktopBookingNewMemberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookingNewMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookingNewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
