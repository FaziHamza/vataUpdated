import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDashboardNewClientComponent } from './desktop-dashboard-new-client.component';

describe('DesktopDashboardNewClientComponent', () => {
  let component: DesktopDashboardNewClientComponent;
  let fixture: ComponentFixture<DesktopDashboardNewClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDashboardNewClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDashboardNewClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
