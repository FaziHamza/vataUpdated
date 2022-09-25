import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsOpenItemsComponent } from './widgets-open-items.component';

describe('WidgetsOpenItemsComponent', () => {
  let component: WidgetsOpenItemsComponent;
  let fixture: ComponentFixture<WidgetsOpenItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsOpenItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsOpenItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
