import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetsRewardPointsComponent } from './widgets-reward-points.component';

describe('WidgetsRewardPointsComponent', () => {
  let component: WidgetsRewardPointsComponent;
  let fixture: ComponentFixture<WidgetsRewardPointsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsRewardPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsRewardPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
