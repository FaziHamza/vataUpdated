import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBookingNewClientComponent } from './desktop-booking-new-client.component';

describe('DesktopBookingNewClientComponent', () => {
  let component: DesktopBookingNewClientComponent;
  let fixture: ComponentFixture<DesktopBookingNewClientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookingNewClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookingNewClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
