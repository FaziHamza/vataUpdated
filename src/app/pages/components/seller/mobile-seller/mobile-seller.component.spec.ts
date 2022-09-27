import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileSellerComponent } from './mobile-seller.component';

describe('MobileSellerComponent', () => {
  let component: MobileSellerComponent;
  let fixture: ComponentFixture<MobileSellerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
