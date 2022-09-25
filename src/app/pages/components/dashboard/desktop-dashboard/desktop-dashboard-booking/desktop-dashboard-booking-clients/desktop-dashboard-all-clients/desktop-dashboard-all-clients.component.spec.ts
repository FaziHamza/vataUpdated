import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardAllClientsComponent } from './desktop-dashboard-all-clients.component';

describe('DesktopDashboardAllClientsComponent', () => {
  let component: DesktopDashboardAllClientsComponent;
  let fixture: ComponentFixture<DesktopDashboardAllClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardAllClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardAllClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
