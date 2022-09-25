import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBookProductComponent } from './mobile-book-product.component';

describe('MobileBookProductComponent', () => {
  let component: MobileBookProductComponent;
  let fixture: ComponentFixture<MobileBookProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBookProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBookProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
