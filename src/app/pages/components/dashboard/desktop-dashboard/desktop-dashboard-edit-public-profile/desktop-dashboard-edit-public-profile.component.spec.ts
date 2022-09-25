import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardEditPublicProfileComponent } from './desktop-dashboard-edit-public-profile.component';

describe('DesktopDashboardEditPublicProfileComponent', () => {
  let component: DesktopDashboardEditPublicProfileComponent;
  let fixture: ComponentFixture<DesktopDashboardEditPublicProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardEditPublicProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardEditPublicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
