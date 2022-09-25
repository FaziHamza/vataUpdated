import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCustomerQuestionsAndAnswersComponent } from './mobile-customer-questions-and-answers.component';

describe('MobileCustomerQuestionsAndAnswersComponent', () => {
  let component: MobileCustomerQuestionsAndAnswersComponent;
  let fixture: ComponentFixture<MobileCustomerQuestionsAndAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCustomerQuestionsAndAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCustomerQuestionsAndAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
