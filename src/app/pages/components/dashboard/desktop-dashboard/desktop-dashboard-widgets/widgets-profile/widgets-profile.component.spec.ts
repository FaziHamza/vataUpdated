import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetsProfileComponent } from './widgets-profile.component';

describe('WidgetsProfileComponent', () => {
  let component: WidgetsProfileComponent;
  let fixture: ComponentFixture<WidgetsProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
