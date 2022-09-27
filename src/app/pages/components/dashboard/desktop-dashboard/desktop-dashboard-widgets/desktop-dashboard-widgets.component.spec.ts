import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopDashboardWidgetsComponent } from './desktop-dashboard-widgets.component';

describe('DesktopDashboardWidgetsComponent', () => {
  let component: DesktopDashboardWidgetsComponent;
  let fixture: ComponentFixture<DesktopDashboardWidgetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
