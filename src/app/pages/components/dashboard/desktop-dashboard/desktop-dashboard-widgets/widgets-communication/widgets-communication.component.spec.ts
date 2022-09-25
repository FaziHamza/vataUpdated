import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsCommunicationComponent } from './widgets-communication.component';

describe('WidgetsCommunicationComponent', () => {
  let component: WidgetsCommunicationComponent;
  let fixture: ComponentFixture<WidgetsCommunicationComponent>;

  beforeEach(async(() => {
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
