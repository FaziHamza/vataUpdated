import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WriteReviewModalComponent } from './write-review-modal.component';

describe('WriteReviewModalComponent', () => {
  let component: WriteReviewModalComponent;
  let fixture: ComponentFixture<WriteReviewModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteReviewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteReviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
