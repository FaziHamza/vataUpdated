import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAppComponent } from './booking-app.component';

describe('BookingAppComponent', () => {
  let component: BookingAppComponent;
  let fixture: ComponentFixture<BookingAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
