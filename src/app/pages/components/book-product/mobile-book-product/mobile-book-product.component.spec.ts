import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileBookProductComponent } from './mobile-book-product.component';

describe('MobileBookProductComponent', () => {
  let component: MobileBookProductComponent;
  let fixture: ComponentFixture<MobileBookProductComponent>;

  beforeEach(waitForAsync(() => {
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
