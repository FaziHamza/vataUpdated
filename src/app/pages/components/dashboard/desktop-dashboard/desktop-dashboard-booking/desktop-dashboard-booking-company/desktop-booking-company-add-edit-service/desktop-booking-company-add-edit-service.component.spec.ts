import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBookingCompanyAddEditServiceComponent } from './desktop-booking-company-add-edit-service.component';

describe('DesktopBookingCompanyAddEditServiceComponent', () => {
  let component: DesktopBookingCompanyAddEditServiceComponent;
  let fixture: ComponentFixture<DesktopBookingCompanyAddEditServiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookingCompanyAddEditServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookingCompanyAddEditServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
