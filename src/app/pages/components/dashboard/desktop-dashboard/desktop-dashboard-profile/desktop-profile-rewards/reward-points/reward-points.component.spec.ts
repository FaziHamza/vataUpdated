import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RewardPointsComponent } from './reward-points.component';

describe('RewardPointsComponent', () => {
  let component: RewardPointsComponent;
  let fixture: ComponentFixture<RewardPointsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
