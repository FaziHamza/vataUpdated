import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToggleViewComponent } from './toggle-view.component';

describe('ToggleViewComponent', () => {
  let component: ToggleViewComponent;
  let fixture: ComponentFixture<ToggleViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
