import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCategoriesMobileComponent } from './booking-categories-mobile.component';

describe('BookingCategoriesMobileComponent', () => {
  let component: BookingCategoriesMobileComponent;
  let fixture: ComponentFixture<BookingCategoriesMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingCategoriesMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCategoriesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
