import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookingsFilterModalComponent } from './bookings-filter-modal.component';

describe('BookingsFilterModalComponent', () => {
  let component: BookingsFilterModalComponent;
  let fixture: ComponentFixture<BookingsFilterModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsFilterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
