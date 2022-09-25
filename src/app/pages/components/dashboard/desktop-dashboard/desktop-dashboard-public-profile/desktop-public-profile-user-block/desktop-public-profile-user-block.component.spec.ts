import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPublicProfileUserBlockComponent } from './desktop-public-profile-user-block.component';

describe('DesktopPublicProfileUserBlockComponent', () => {
  let component: DesktopPublicProfileUserBlockComponent;
  let fixture: ComponentFixture<DesktopPublicProfileUserBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPublicProfileUserBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPublicProfileUserBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
