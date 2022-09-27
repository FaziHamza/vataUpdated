import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopPublicProfileFamilyMemberComponent } from './desktop-public-profile-family-member.component';

describe('DesktopPublicProfileFamilyMemberComponent', () => {
  let component: DesktopPublicProfileFamilyMemberComponent;
  let fixture: ComponentFixture<DesktopPublicProfileFamilyMemberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPublicProfileFamilyMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPublicProfileFamilyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
