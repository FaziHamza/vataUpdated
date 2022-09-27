import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopDashboardAllServicesComponent } from './desktop-dashboard-all-services.component';

describe('DesktopDashboardAllServicesComponent', () => {
  let component: DesktopDashboardAllServicesComponent;
  let fixture: ComponentFixture<DesktopDashboardAllServicesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardAllServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardAllServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
