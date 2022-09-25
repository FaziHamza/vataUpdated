import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardMainOutletComponent } from './desktop-dashboard-main-outlet.component';

describe('DesktopDashboardMainOutletComponent', () => {
  let component: DesktopDashboardMainOutletComponent;
  let fixture: ComponentFixture<DesktopDashboardMainOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardMainOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardMainOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
