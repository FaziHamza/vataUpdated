import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BarRatingComponent } from './bar-rating.component';

describe('BarRatingComponent', () => {
  let component: BarRatingComponent;
  let fixture: ComponentFixture<BarRatingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BarRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
