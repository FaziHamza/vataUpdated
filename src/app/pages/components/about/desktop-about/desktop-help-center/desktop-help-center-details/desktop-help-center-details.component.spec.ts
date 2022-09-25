import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopHelpCenterDetailsComponent } from './desktop-help-center-details.component';

describe('DesktopHelpCenterDetailsComponent', () => {
  let component: DesktopHelpCenterDetailsComponent;
  let fixture: ComponentFixture<DesktopHelpCenterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopHelpCenterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopHelpCenterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
