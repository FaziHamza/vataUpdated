import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDashboardHelpCenterComponent } from './mobile-dashboard-help-center.component';

describe('MobileDashboardHelpCenterComponent', () => {
  let component: MobileDashboardHelpCenterComponent;
  let fixture: ComponentFixture<MobileDashboardHelpCenterComponent>;

  beforeEach(async(() => {
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
