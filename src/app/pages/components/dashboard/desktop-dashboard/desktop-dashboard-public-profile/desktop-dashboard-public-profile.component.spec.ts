import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopDashboardPublicProfileComponent } from './desktop-dashboard-public-profile.component';

describe('DesktopDashboardPublicProfileComponent', () => {
  let component: DesktopDashboardPublicProfileComponent;
  let fixture: ComponentFixture<DesktopDashboardPublicProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardPublicProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardPublicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
