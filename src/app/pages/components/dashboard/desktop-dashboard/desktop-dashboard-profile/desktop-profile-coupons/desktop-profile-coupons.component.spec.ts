import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopProfileCouponsComponent } from './desktop-profile-coupons.component';

describe('DesktopProfileCouponsComponent', () => {
  let component: DesktopProfileCouponsComponent;
  let fixture: ComponentFixture<DesktopProfileCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopProfileCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopProfileCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
