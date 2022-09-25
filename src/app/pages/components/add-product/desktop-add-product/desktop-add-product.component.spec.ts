import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopAddProductComponent } from './desktop-add-product.component';

describe('DesktopAddProductComponent', () => {
  let component: DesktopAddProductComponent;
  let fixture: ComponentFixture<DesktopAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
