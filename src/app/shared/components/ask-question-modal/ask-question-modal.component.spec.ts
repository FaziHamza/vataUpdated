import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQuestionModalComponent } from './ask-question-modal.component';

describe('AskQuestionModalComponent', () => {
  let component: AskQuestionModalComponent;
  let fixture: ComponentFixture<AskQuestionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskQuestionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQuestionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
