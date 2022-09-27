import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetsNextAppointmentComponent } from './widgets-next-appointment.component';

describe('WidgetsNextAppointmentComponent', () => {
  let component: WidgetsNextAppointmentComponent;
  let fixture: ComponentFixture<WidgetsNextAppointmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsNextAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsNextAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
