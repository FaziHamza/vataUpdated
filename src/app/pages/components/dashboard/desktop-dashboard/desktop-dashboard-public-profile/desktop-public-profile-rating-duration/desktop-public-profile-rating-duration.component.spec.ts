import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPublicProfileRatingDurationComponent } from './desktop-public-profile-rating-duration.component';

describe('DesktopPublicProfileRatingDurationComponent', () => {
  let component: DesktopPublicProfileRatingDurationComponent;
  let fixture: ComponentFixture<DesktopPublicProfileRatingDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPublicProfileRatingDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPublicProfileRatingDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
