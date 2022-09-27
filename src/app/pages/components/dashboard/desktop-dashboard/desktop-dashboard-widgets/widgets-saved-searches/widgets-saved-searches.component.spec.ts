import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetsSavedSearchesComponent } from './widgets-saved-searches.component';

describe('WidgetsSavedSearchesComponent', () => {
  let component: WidgetsSavedSearchesComponent;
  let fixture: ComponentFixture<WidgetsSavedSearchesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsSavedSearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsSavedSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
