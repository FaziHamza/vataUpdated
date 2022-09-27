import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopProfileFeesPayPostilComponent } from './desktop-profile-fees-pay-postil.component';

describe('DesktopProfileFeesPayPostilComponent', () => {
  let component: DesktopProfileFeesPayPostilComponent;
  let fixture: ComponentFixture<DesktopProfileFeesPayPostilComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopProfileFeesPayPostilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopProfileFeesPayPostilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
