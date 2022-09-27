import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopProfileRewardsComponent } from './desktop-profile-rewards.component';

describe('DesktopProfileRewardsComponent', () => {
  let component: DesktopProfileRewardsComponent;
  let fixture: ComponentFixture<DesktopProfileRewardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopProfileRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopProfileRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
