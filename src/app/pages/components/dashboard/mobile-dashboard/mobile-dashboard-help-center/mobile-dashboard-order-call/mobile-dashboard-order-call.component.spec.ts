import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDashboardOrderCallComponent } from './mobile-dashboard-order-call.component';

describe('MobileDashboardOrderCallComponent', () => {
  let component: MobileDashboardOrderCallComponent;
  let fixture: ComponentFixture<MobileDashboardOrderCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDashboardOrderCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDashboardOrderCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
