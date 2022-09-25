import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPublicProfileAddBlacklistComponent } from './desktop-public-profile-add-blacklist.component';

describe('DesktopPublicProfileAddBlacklistComponent', () => {
  let component: DesktopPublicProfileAddBlacklistComponent;
  let fixture: ComponentFixture<DesktopPublicProfileAddBlacklistComponent>;

  beforeEach(async(() => {
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
