import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopDashboardPublicProfileOutletComponent } from './desktop-dashboard-public-profile-outlet.component';

describe('DesktopDashboardPublicProfileOutletComponent', () => {
  let component: DesktopDashboardPublicProfileOutletComponent;
  let fixture: ComponentFixture<DesktopDashboardPublicProfileOutletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardPublicProfileOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardPublicProfileOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
