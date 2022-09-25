import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDashboardBookingComponent } from './mobile-dashboard-booking.component';

describe('MobileDashboardBookingComponent', () => {
  let component: MobileDashboardBookingComponent;
  let fixture: ComponentFixture<MobileDashboardBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDashboardBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDashboardBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
