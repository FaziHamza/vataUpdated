import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookingsSearchViewComponent } from './bookings-search-view.component';

describe('BookingsSearchViewComponent', () => {
  let component: BookingsSearchViewComponent;
  let fixture: ComponentFixture<BookingsSearchViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsSearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
