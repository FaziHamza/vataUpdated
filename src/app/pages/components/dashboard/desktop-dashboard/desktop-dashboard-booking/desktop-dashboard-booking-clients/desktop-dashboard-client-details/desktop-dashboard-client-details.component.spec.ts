import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardClientDetailsComponent } from './desktop-dashboard-client-details.component';

describe('DesktopDashboardClientDetailsComponent', () => {
  let component: DesktopDashboardClientDetailsComponent;
  let fixture: ComponentFixture<DesktopDashboardClientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardClientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
