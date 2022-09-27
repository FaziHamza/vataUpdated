import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileTermsOfUseComponent } from './mobile-terms-of-use.component';

describe('MobileTermsOfUseComponent', () => {
  let component: MobileTermsOfUseComponent;
  let fixture: ComponentFixture<MobileTermsOfUseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileTermsOfUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTermsOfUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
