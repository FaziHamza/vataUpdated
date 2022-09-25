import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardBookingPortfolioComponent } from './desktop-dashboard-booking-portfolio.component';

describe('DesktopDashboardBookingPortfolioComponent', () => {
  let component: DesktopDashboardBookingPortfolioComponent;
  let fixture: ComponentFixture<DesktopDashboardBookingPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardBookingPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardBookingPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
