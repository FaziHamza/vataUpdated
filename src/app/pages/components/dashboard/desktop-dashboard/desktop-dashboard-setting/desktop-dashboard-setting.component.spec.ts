import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardSettingComponent } from './desktop-dashboard-setting.component';

describe('DesktopDashboardSettingComponent', () => {
  let component: DesktopDashboardSettingComponent;
  let fixture: ComponentFixture<DesktopDashboardSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
