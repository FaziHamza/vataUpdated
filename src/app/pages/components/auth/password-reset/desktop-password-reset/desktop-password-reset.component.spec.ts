import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopPasswordResetComponent } from './desktop-password-reset.component';

describe('DesktopPasswordResetComponent', () => {
  let component: DesktopPasswordResetComponent;
  let fixture: ComponentFixture<DesktopPasswordResetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPasswordResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
