import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePasswordResetComponent } from './mobile-password-reset.component';

describe('MobilePasswordResetComponent', () => {
  let component: MobilePasswordResetComponent;
  let fixture: ComponentFixture<MobilePasswordResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePasswordResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
