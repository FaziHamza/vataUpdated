import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopDashboardProfileOutletComponent } from './desktop-dashboard-profile-outlet.component';

describe('DesktopDashboardProfileOutletComponent', () => {
  let component: DesktopDashboardProfileOutletComponent;
  let fixture: ComponentFixture<DesktopDashboardProfileOutletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardProfileOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardProfileOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
