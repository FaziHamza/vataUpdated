import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileSellerAllItemsComponent } from './mobile-seller-all-items.component';

describe('MobileSellerAllItemsComponent', () => {
  let component: MobileSellerAllItemsComponent;
  let fixture: ComponentFixture<MobileSellerAllItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSellerAllItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSellerAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
