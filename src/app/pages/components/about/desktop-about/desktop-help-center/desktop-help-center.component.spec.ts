import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopHelpCenterComponent } from './desktop-help-center.component';

describe('DesktopHelpCenterComponent', () => {
  let component: DesktopHelpCenterComponent;
  let fixture: ComponentFixture<DesktopHelpCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopHelpCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopHelpCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
