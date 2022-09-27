import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VerifyEmailAccountComponent } from './verify-email-account.component';

describe('VerifyEmailAccountComponent', () => {
  let component: VerifyEmailAccountComponent;
  let fixture: ComponentFixture<VerifyEmailAccountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyEmailAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyEmailAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
