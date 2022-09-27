import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileDashboardSettingComponent } from './mobile-dashboard-setting.component';

describe('MobileDashboardSettingComponent', () => {
  let component: MobileDashboardSettingComponent;
  let fixture: ComponentFixture<MobileDashboardSettingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDashboardSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDashboardSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
