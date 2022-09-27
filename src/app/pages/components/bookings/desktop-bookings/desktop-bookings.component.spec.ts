import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBookingsComponent } from './desktop-bookings.component';

describe('DesktopBookingsComponent', () => {
  let component: DesktopBookingsComponent;
  let fixture: ComponentFixture<DesktopBookingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
