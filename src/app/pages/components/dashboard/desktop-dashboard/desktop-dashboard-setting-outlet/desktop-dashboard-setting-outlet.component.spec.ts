import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopDashboardSettingOutletComponent } from './desktop-dashboard-setting-outlet.component';

describe('DesktopDashboardSettingOutletComponent', () => {
  let component: DesktopDashboardSettingOutletComponent;
  let fixture: ComponentFixture<DesktopDashboardSettingOutletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardSettingOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardSettingOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
