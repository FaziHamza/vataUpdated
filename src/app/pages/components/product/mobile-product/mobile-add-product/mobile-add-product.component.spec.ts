import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAddProductComponent } from './mobile-add-product.component';

describe('MobileAddProductComponent', () => {
  let component: MobileAddProductComponent;
  let fixture: ComponentFixture<MobileAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
