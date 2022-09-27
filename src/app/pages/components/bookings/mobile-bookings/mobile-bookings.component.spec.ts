import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileBookingsComponent } from './mobile-bookings.component';

describe('MobileBookingsComponent', () => {
  let component: MobileBookingsComponent;
  let fixture: ComponentFixture<MobileBookingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
