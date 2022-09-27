import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBookingComanyInfoMainComponent } from './desktop-booking-comany-info-main.component';

describe('DesktopBookingComanyInfoMainComponent', () => {
  let component: DesktopBookingComanyInfoMainComponent;
  let fixture: ComponentFixture<DesktopBookingComanyInfoMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookingComanyInfoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookingComanyInfoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
