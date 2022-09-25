import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDealsProductComponent } from './mobile-deals-product.component';

describe('MobileDealsProductComponent', () => {
  let component: MobileDealsProductComponent;
  let fixture: ComponentFixture<MobileDealsProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDealsProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDealsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
