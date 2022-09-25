import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopBookingNewClientComponent } from './desktop-booking-new-client.component';

describe('DesktopBookingNewClientComponent', () => {
  let component: DesktopBookingNewClientComponent;
  let fixture: ComponentFixture<DesktopBookingNewClientComponent>;

  beforeEach(async(() => {
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
