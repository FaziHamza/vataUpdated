import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddProductContainerComponent } from './add-product-container.component';

describe('AddProductContainerComponent', () => {
  let component: AddProductContainerComponent;
  let fixture: ComponentFixture<AddProductContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
