import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPasswordResetComponent } from './desktop-password-reset.component';

describe('DesktopPasswordResetComponent', () => {
  let component: DesktopPasswordResetComponent;
  let fixture: ComponentFixture<DesktopPasswordResetComponent>;

  beforeEach(async(() => {
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
