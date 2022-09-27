import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileBestBookingsComponent } from './mobile-best-bookings.component';

describe('MobileBestBookingsComponent', () => {
  let component: MobileBestBookingsComponent;
  let fixture: ComponentFixture<MobileBestBookingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBestBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBestBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
