import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardProfileOutletComponent } from './desktop-dashboard-profile-outlet.component';

describe('DesktopDashboardProfileOutletComponent', () => {
  let component: DesktopDashboardProfileOutletComponent;
  let fixture: ComponentFixture<DesktopDashboardProfileOutletComponent>;

  beforeEach(async(() => {
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
