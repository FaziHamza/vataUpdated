import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetsOpenBookingComponent } from './widgets-open-booking.component';

describe('WidgetsOpenBookingComponent', () => {
  let component: WidgetsOpenBookingComponent;
  let fixture: ComponentFixture<WidgetsOpenBookingComponent>;

  beforeEach(waitForAsync(() => {
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
