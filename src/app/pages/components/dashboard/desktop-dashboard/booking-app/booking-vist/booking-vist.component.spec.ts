import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingVistComponent } from './booking-vist.component';

describe('BookingVistComponent', () => {
  let component: BookingVistComponent;
  let fixture: ComponentFixture<BookingVistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingVistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingVistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
