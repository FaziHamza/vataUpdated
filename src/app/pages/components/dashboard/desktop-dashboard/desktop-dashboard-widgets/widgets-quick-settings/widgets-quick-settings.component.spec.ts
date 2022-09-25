import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsQuickSettingsComponent } from './widgets-quick-settings.component';

describe('WidgetsQuickSettingsComponent', () => {
  let component: WidgetsQuickSettingsComponent;
  let fixture: ComponentFixture<WidgetsQuickSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsQuickSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsQuickSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
