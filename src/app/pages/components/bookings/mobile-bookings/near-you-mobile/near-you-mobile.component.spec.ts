import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NearYouMobileComponent } from './near-you-mobile.component';

describe('NearYouMobileComponent', () => {
  let component: NearYouMobileComponent;
  let fixture: ComponentFixture<NearYouMobileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NearYouMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearYouMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
