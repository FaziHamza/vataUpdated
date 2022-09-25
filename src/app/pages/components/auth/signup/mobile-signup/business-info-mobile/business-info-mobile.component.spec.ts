import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInfoMobileComponent } from './business-info-mobile.component';

describe('BusinessInfoMobileComponent', () => {
  let component: BusinessInfoMobileComponent;
  let fixture: ComponentFixture<BusinessInfoMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessInfoMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessInfoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
