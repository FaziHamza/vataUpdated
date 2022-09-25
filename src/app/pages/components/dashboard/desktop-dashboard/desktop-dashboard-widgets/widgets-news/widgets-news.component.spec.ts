import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsNewsComponent } from './widgets-news.component';

describe('WidgetsNewsComponent', () => {
  let component: WidgetsNewsComponent;
  let fixture: ComponentFixture<WidgetsNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
