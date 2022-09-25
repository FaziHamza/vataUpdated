import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookProductContainerComponent } from './book-product-container.component';

describe('BookProductContainerComponent', () => {
  let component: BookProductContainerComponent;
  let fixture: ComponentFixture<BookProductContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookProductContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
