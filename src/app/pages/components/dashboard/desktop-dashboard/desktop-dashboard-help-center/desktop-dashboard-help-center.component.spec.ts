import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopDashboardHelpCenterComponent } from './desktop-dashboard-help-center.component';

describe('DesktopDashboardHelpCenterComponent', () => {
  let component: DesktopDashboardHelpCenterComponent;
  let fixture: ComponentFixture<DesktopDashboardHelpCenterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardHelpCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardHelpCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
