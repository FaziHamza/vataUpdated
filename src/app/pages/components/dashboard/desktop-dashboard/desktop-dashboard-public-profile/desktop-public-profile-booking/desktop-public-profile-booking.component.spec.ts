import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopPublicProfileBookingComponent } from './desktop-public-profile-booking.component';

describe('DesktopPublicProfileBookingComponent', () => {
  let component: DesktopPublicProfileBookingComponent;
  let fixture: ComponentFixture<DesktopPublicProfileBookingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPublicProfileBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPublicProfileBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
