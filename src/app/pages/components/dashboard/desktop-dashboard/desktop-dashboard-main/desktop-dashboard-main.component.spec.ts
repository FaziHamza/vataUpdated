import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardMainComponent } from './desktop-dashboard-main.component';

describe('DesktopDashboardMainComponent', () => {
  let component: DesktopDashboardMainComponent;
  let fixture: ComponentFixture<DesktopDashboardMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
