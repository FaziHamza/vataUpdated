import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductMobileComponent } from './product-mobile.component';

describe('ProductMobileComponent', () => {
  let component: ProductMobileComponent;
  let fixture: ComponentFixture<ProductMobileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
