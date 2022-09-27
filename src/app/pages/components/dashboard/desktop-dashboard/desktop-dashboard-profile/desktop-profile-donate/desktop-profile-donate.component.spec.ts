import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopProfileDonateComponent } from './desktop-profile-donate.component';

describe('DesktopProfileDonateComponent', () => {
  let component: DesktopProfileDonateComponent;
  let fixture: ComponentFixture<DesktopProfileDonateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopProfileDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopProfileDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
