import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopDashboardEditPublicProfileOutletComponent } from './desktop-dashboard-edit-public-profile-outlet.component';

describe('DesktopDashboardEditPublicProfileOutletComponent', () => {
  let component: DesktopDashboardEditPublicProfileOutletComponent;
  let fixture: ComponentFixture<DesktopDashboardEditPublicProfileOutletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardEditPublicProfileOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardEditPublicProfileOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
