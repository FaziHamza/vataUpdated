import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopProfileDonateComponent } from './desktop-profile-donate.component';

describe('DesktopProfileDonateComponent', () => {
  let component: DesktopProfileDonateComponent;
  let fixture: ComponentFixture<DesktopProfileDonateComponent>;

  beforeEach(async(() => {
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
