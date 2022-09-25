import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBookingsComponent } from './mobile-bookings.component';

describe('MobileBookingsComponent', () => {
  let component: MobileBookingsComponent;
  let fixture: ComponentFixture<MobileBookingsComponent>;

  beforeEach(async(() => {
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
