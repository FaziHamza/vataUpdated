import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsFeesToPayComponent } from './widgets-fees-to-pay.component';

describe('WidgetsFeesToPayComponent', () => {
  let component: WidgetsFeesToPayComponent;
  let fixture: ComponentFixture<WidgetsFeesToPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsFeesToPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsFeesToPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
