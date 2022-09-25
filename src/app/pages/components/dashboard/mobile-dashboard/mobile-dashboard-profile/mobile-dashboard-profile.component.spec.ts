import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDashboardProfileComponent } from './mobile-dashboard-profile.component';

describe('MobileDashboardProfileComponent', () => {
  let component: MobileDashboardProfileComponent;
  let fixture: ComponentFixture<MobileDashboardProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDashboardProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDashboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
