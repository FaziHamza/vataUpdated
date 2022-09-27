import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBookingEditMemberComponent } from './desktop-booking-edit-member.component';

describe('DesktopBookingEditMemberComponent', () => {
  let component: DesktopBookingEditMemberComponent;
  let fixture: ComponentFixture<DesktopBookingEditMemberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookingEditMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookingEditMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
