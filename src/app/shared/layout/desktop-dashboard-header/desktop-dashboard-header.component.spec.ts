import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardHeaderComponent } from './desktop-dashboard-header.component';

describe('DesktopDashboardHeaderComponent', () => {
  let component: DesktopDashboardHeaderComponent;
  let fixture: ComponentFixture<DesktopDashboardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
