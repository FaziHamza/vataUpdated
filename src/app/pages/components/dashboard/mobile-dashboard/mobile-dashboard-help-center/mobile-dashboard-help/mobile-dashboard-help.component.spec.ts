import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDashboardHelpComponent } from './mobile-dashboard-help.component';

describe('MobileDashboardHelpComponent', () => {
  let component: MobileDashboardHelpComponent;
  let fixture: ComponentFixture<MobileDashboardHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDashboardHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDashboardHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
