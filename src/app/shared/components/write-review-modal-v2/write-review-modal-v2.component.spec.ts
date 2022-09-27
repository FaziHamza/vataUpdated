import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WriteReviewModalV2Component } from './write-review-modal-v2.component';

describe('WriteReviewModalV2Component', () => {
  let component: WriteReviewModalV2Component;
  let fixture: ComponentFixture<WriteReviewModalV2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteReviewModalV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteReviewModalV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
