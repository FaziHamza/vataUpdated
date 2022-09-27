import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopProfileShippingComponent } from './desktop-profile-shipping.component';

describe('DesktopProfileShippingComponent', () => {
  let component: DesktopProfileShippingComponent;
  let fixture: ComponentFixture<DesktopProfileShippingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopProfileShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopProfileShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
