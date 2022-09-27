import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopCustomerQuestionsAndAnswersComponent } from './desktop-customer-questions-and-answers.component';

describe('DesktopCustomerQuestionsAndAnswersComponent', () => {
  let component: DesktopCustomerQuestionsAndAnswersComponent;
  let fixture: ComponentFixture<DesktopCustomerQuestionsAndAnswersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopCustomerQuestionsAndAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopCustomerQuestionsAndAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
