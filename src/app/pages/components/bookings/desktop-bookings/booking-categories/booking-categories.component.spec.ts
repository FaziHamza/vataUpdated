import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCategoriesComponent } from './booking-categories.component';

describe('BookingCategoriesComponent', () => {
  let component: BookingCategoriesComponent;
  let fixture: ComponentFixture<BookingCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
