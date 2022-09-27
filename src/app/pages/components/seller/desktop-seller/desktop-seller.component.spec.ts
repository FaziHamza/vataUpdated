import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopSellerComponent } from './desktop-seller.component';

describe('DesktopSellerComponent', () => {
  let component: DesktopSellerComponent;
  let fixture: ComponentFixture<DesktopSellerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
