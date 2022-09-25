import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopProfileMembershipComponent } from './desktop-profile-membership.component';

describe('DesktopProfileMembershipComponent', () => {
  let component: DesktopProfileMembershipComponent;
  let fixture: ComponentFixture<DesktopProfileMembershipComponent>;

  beforeEach(async(() => {
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
