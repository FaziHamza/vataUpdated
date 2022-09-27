import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetsPublicProfileComponent } from './widgets-public-profile.component';

describe('WidgetsPublicProfileComponent', () => {
  let component: WidgetsPublicProfileComponent;
  let fixture: ComponentFixture<WidgetsPublicProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsPublicProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsPublicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
