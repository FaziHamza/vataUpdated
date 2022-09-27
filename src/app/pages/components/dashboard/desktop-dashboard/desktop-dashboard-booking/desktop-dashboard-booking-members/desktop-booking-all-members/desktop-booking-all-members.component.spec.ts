import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBookingAllMembersComponent } from './desktop-booking-all-members.component';

describe('DesktopBookingAllMembersComponent', () => {
  let component: DesktopBookingAllMembersComponent;
  let fixture: ComponentFixture<DesktopBookingAllMembersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookingAllMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookingAllMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
