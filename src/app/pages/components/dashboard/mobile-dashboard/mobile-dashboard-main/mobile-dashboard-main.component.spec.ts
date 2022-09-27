import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileDashboardMainComponent } from './mobile-dashboard-main.component';

describe('MobileDashboardMainComponent', () => {
  let component: MobileDashboardMainComponent;
  let fixture: ComponentFixture<MobileDashboardMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDashboardMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
