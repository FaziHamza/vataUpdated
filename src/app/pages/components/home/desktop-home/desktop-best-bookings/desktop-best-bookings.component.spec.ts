import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBestBookingsComponent } from './desktop-best-bookings.component';

describe('DesktopBestBookingsComponent', () => {
  let component: DesktopBestBookingsComponent;
  let fixture: ComponentFixture<DesktopBestBookingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBestBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBestBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
