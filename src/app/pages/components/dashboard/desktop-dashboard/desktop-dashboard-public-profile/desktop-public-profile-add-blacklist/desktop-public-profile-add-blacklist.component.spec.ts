import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopPublicProfileAddBlacklistComponent } from './desktop-public-profile-add-blacklist.component';

describe('DesktopPublicProfileAddBlacklistComponent', () => {
  let component: DesktopPublicProfileAddBlacklistComponent;
  let fixture: ComponentFixture<DesktopPublicProfileAddBlacklistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPublicProfileAddBlacklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPublicProfileAddBlacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
