import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsFavoriteBusinessComponent } from './widgets-favorite-business.component';

describe('WidgetsFavoriteBusinessComponent', () => {
  let component: WidgetsFavoriteBusinessComponent;
  let fixture: ComponentFixture<WidgetsFavoriteBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsFavoriteBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsFavoriteBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
