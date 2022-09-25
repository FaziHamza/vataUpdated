import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsMyShopsComponent } from './widgets-my-shops.component';

describe('WidgetsMyShopsComponent', () => {
  let component: WidgetsMyShopsComponent;
  let fixture: ComponentFixture<WidgetsMyShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsMyShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsMyShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
