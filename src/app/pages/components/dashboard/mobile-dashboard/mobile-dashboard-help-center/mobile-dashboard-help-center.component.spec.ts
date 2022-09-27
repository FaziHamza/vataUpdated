import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileDashboardHelpCenterComponent } from './mobile-dashboard-help-center.component';

describe('MobileDashboardHelpCenterComponent', () => {
  let component: MobileDashboardHelpCenterComponent;
  let fixture: ComponentFixture<MobileDashboardHelpCenterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDashboardHelpCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDashboardHelpCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
