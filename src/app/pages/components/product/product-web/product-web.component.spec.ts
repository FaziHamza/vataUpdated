import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWebComponent } from './product-web.component';

describe('ProductWebComponent', () => {
  let component: ProductWebComponent;
  let fixture: ComponentFixture<ProductWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
