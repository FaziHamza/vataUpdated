import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddProductVariationComponent } from './add-product-variation.component';

describe('AddProductVariationComponent', () => {
  let component: AddProductVariationComponent;
  let fixture: ComponentFixture<AddProductVariationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductVariationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
