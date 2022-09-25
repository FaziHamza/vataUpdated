import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopAddProductVariationComponent } from './desktop-add-product-variation.component';

describe('DesktopAddProductVariationComponent', () => {
  let component: DesktopAddProductVariationComponent;
  let fixture: ComponentFixture<DesktopAddProductVariationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopAddProductVariationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopAddProductVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
