import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopProfileFeesPayPostilComponent } from './desktop-profile-fees-pay-postil.component';

describe('DesktopProfileFeesPayPostilComponent', () => {
  let component: DesktopProfileFeesPayPostilComponent;
  let fixture: ComponentFixture<DesktopProfileFeesPayPostilComponent>;

  beforeEach(async(() => {
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
