import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopPublicProfileEditMemberComponent } from './desktop-public-profile-edit-member.component';

describe('DesktopPublicProfileEditMemberComponent', () => {
  let component: DesktopPublicProfileEditMemberComponent;
  let fixture: ComponentFixture<DesktopPublicProfileEditMemberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPublicProfileEditMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPublicProfileEditMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
