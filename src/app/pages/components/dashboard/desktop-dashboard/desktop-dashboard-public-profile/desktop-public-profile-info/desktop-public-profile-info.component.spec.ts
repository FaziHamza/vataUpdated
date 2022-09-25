import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPublicProfileInfoComponent } from './desktop-public-profile-info.component';

describe('DesktopPublicProfileInfoComponent', () => {
  let component: DesktopPublicProfileInfoComponent;
  let fixture: ComponentFixture<DesktopPublicProfileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPublicProfileInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPublicProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
