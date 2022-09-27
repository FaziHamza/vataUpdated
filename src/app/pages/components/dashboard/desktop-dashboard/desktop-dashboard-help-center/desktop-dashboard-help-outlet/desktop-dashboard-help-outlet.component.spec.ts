import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopDashboardHelpOutletComponent } from './desktop-dashboard-help-outlet.component';

describe('DesktopDashboardHelpOutletComponent', () => {
  let component: DesktopDashboardHelpOutletComponent;
  let fixture: ComponentFixture<DesktopDashboardHelpOutletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardHelpOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardHelpOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
