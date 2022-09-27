import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileAddProductVariationComponent } from './mobile-add-product-variation.component';

describe('MobileAddProductVariationComponent', () => {
  let component: MobileAddProductVariationComponent;
  let fixture: ComponentFixture<MobileAddProductVariationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAddProductVariationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAddProductVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
