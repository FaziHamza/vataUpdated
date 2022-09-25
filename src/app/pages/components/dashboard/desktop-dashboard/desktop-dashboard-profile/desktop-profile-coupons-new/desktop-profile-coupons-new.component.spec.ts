import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopProfileCouponsNewComponent } from './desktop-profile-coupons-new.component';

describe('DesktopProfileCouponsNewComponent', () => {
  let component: DesktopProfileCouponsNewComponent;
  let fixture: ComponentFixture<DesktopProfileCouponsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopProfileCouponsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopProfileCouponsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
