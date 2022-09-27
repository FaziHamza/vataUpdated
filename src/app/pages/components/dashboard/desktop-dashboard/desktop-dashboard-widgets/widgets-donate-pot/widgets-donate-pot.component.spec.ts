import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetsDonatePotComponent } from './widgets-donate-pot.component';

describe('WidgetsDonatePotComponent', () => {
  let component: WidgetsDonatePotComponent;
  let fixture: ComponentFixture<WidgetsDonatePotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsDonatePotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsDonatePotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
