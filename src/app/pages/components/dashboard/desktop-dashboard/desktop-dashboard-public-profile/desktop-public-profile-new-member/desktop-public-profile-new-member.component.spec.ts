import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPublicProfileNewMemberComponent } from './desktop-public-profile-new-member.component';

describe('DesktopPublicProfileNewMemberComponent', () => {
  let component: DesktopPublicProfileNewMemberComponent;
  let fixture: ComponentFixture<DesktopPublicProfileNewMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPublicProfileNewMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPublicProfileNewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
