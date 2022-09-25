import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardPublicProfileComponent } from './desktop-dashboard-public-profile.component';

describe('DesktopDashboardPublicProfileComponent', () => {
  let component: DesktopDashboardPublicProfileComponent;
  let fixture: ComponentFixture<DesktopDashboardPublicProfileComponent>;

  beforeEach(async(() => {
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
