import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetsCommunicationComponent } from './widgets-communication.component';

describe('WidgetsCommunicationComponent', () => {
  let component: WidgetsCommunicationComponent;
  let fixture: ComponentFixture<WidgetsCommunicationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
