import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetsMyFavoriteComponent } from './widgets-my-favorite.component';

describe('WidgetsMyFavoriteComponent', () => {
  let component: WidgetsMyFavoriteComponent;
  let fixture: ComponentFixture<WidgetsMyFavoriteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsMyFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsMyFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
