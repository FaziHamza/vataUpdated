import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBookingVisitsStatsComponent } from './desktop-booking-visits-stats.component';

describe('DesktopBookingVisitsStatsComponent', () => {
  let component: DesktopBookingVisitsStatsComponent;
  let fixture: ComponentFixture<DesktopBookingVisitsStatsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookingVisitsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookingVisitsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
