import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileAddProductComponent } from './mobile-add-product.component';

describe('MobileAddProductComponent', () => {
  let component: MobileAddProductComponent;
  let fixture: ComponentFixture<MobileAddProductComponent>;

  beforeEach(waitForAsync(() => {
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
