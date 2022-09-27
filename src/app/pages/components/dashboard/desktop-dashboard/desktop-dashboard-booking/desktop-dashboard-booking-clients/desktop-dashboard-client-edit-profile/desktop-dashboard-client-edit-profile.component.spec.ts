import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopDashboardClientEditProfileComponent } from './desktop-dashboard-client-edit-profile.component';

describe('DesktopDashboardClientEditProfileComponent', () => {
  let component: DesktopDashboardClientEditProfileComponent;
  let fixture: ComponentFixture<DesktopDashboardClientEditProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardClientEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardClientEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
