import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardWidgetsComponent } from './desktop-dashboard-widgets.component';

describe('DesktopDashboardWidgetsComponent', () => {
  let component: DesktopDashboardWidgetsComponent;
  let fixture: ComponentFixture<DesktopDashboardWidgetsComponent>;

  beforeEach(async(() => {
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
