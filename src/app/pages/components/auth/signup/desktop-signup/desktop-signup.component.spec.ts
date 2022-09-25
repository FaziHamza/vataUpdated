import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSignupComponent } from './desktop-signup.component';

describe('DesktopSignupComponent', () => {
  let component: DesktopSignupComponent;
  let fixture: ComponentFixture<DesktopSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
