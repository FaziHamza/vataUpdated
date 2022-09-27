import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopProfileMembershipComponent } from './desktop-profile-membership.component';

describe('DesktopProfileMembershipComponent', () => {
  let component: DesktopProfileMembershipComponent;
  let fixture: ComponentFixture<DesktopProfileMembershipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopProfileMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopProfileMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
