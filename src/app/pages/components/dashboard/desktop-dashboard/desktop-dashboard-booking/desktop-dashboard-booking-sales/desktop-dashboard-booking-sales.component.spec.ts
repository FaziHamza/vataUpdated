import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardBookingSalesComponent } from './desktop-dashboard-booking-sales.component';

describe('DesktopDashboardBookingSalesComponent', () => {
  let component: DesktopDashboardBookingSalesComponent;
  let fixture: ComponentFixture<DesktopDashboardBookingSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardBookingSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardBookingSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
