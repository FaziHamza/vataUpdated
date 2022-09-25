import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardProfileComponent } from './desktop-dashboard-profile.component';

describe('DesktopDashboardProfileComponent', () => {
  let component: DesktopDashboardProfileComponent;
  let fixture: ComponentFixture<DesktopDashboardProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
