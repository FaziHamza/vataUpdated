import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsOpenBookingComponent } from './widgets-open-booking.component';

describe('WidgetsOpenBookingComponent', () => {
  let component: WidgetsOpenBookingComponent;
  let fixture: ComponentFixture<WidgetsOpenBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsOpenBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsOpenBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
