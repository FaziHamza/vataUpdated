import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneVerifyMobileComponent } from './phone-verify-mobile.component';

describe('PhoneVerifyMobileComponent', () => {
  let component: PhoneVerifyMobileComponent;
  let fixture: ComponentFixture<PhoneVerifyMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneVerifyMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneVerifyMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
