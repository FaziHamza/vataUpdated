import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserInfoMobileComponent } from './user-info-mobile.component';

describe('UserInfoMobileComponent', () => {
  let component: UserInfoMobileComponent;
  let fixture: ComponentFixture<UserInfoMobileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
