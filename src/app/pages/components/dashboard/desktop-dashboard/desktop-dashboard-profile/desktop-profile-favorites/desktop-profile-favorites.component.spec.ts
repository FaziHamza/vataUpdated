import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopProfileFavoritesComponent } from './desktop-profile-favorites.component';

describe('DesktopProfileFavoritesComponent', () => {
  let component: DesktopProfileFavoritesComponent;
  let fixture: ComponentFixture<DesktopProfileFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopProfileFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopProfileFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
