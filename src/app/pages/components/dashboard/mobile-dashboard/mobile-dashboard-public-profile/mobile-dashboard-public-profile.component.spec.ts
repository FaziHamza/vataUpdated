import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileDashboardPublicProfileComponent } from './mobile-dashboard-public-profile.component';

describe('MobileDashboardPublicProfileComponent', () => {
  let component: MobileDashboardPublicProfileComponent;
  let fixture: ComponentFixture<MobileDashboardPublicProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDashboardPublicProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDashboardPublicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
