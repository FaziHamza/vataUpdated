import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetsMySaleComponent } from './widgets-my-sale.component';

describe('WidgetsMySaleComponent', () => {
  let component: WidgetsMySaleComponent;
  let fixture: ComponentFixture<WidgetsMySaleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsMySaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsMySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
