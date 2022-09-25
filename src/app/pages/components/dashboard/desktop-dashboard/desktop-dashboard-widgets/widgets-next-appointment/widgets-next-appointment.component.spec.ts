import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsNextAppointmentComponent } from './widgets-next-appointment.component';

describe('WidgetsNextAppointmentComponent', () => {
  let component: WidgetsNextAppointmentComponent;
  let fixture: ComponentFixture<WidgetsNextAppointmentComponent>;

  beforeEach(async(() => {
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
