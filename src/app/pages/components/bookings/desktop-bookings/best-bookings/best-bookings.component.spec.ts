import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestBookingsComponent } from './best-bookings.component';

describe('BestBookingsComponent', () => {
  let component: BestBookingsComponent;
  let fixture: ComponentFixture<BestBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
