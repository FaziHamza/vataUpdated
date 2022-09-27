import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookProductContainerComponent } from './book-product-container.component';

describe('BookProductContainerComponent', () => {
  let component: BookProductContainerComponent;
  let fixture: ComponentFixture<BookProductContainerComponent>;

  beforeEach(waitForAsync(() => {
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
