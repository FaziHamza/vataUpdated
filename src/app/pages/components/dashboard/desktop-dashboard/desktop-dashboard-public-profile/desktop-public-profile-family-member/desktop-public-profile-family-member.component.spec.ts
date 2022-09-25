import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPublicProfileFamilyMemberComponent } from './desktop-public-profile-family-member.component';

describe('DesktopPublicProfileFamilyMemberComponent', () => {
  let component: DesktopPublicProfileFamilyMemberComponent;
  let fixture: ComponentFixture<DesktopPublicProfileFamilyMemberComponent>;

  beforeEach(async(() => {
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
