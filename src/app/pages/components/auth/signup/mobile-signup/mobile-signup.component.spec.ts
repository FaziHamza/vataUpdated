import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileSignupComponent } from './mobile-signup.component';

describe('MobileSignupComponent', () => {
  let component: MobileSignupComponent;
  let fixture: ComponentFixture<MobileSignupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
