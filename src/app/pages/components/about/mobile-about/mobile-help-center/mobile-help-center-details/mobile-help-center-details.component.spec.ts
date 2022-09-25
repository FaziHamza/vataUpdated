import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHelpCenterDetailsComponent } from './mobile-help-center-details.component';

describe('MobileHelpCenterDetailsComponent', () => {
  let component: MobileHelpCenterDetailsComponent;
  let fixture: ComponentFixture<MobileHelpCenterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileHelpCenterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHelpCenterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
