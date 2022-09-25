import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsContainerComponent } from './bookings-container.component';

describe('BookingsContainerComponent', () => {
  let component: BookingsContainerComponent;
  let fixture: ComponentFixture<BookingsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
