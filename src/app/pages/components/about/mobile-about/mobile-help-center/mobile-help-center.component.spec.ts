import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHelpCenterComponent } from './mobile-help-center.component';

describe('MobileHelpCenterComponent', () => {
  let component: MobileHelpCenterComponent;
  let fixture: ComponentFixture<MobileHelpCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileHelpCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHelpCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
