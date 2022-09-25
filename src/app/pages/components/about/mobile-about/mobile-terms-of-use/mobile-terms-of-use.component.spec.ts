import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTermsOfUseComponent } from './mobile-terms-of-use.component';

describe('MobileTermsOfUseComponent', () => {
  let component: MobileTermsOfUseComponent;
  let fixture: ComponentFixture<MobileTermsOfUseComponent>;

  beforeEach(async(() => {
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
