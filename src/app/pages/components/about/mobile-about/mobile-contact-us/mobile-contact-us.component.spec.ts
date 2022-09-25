import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileContactUsComponent } from './mobile-contact-us.component';

describe('MobileContactUsComponent', () => {
  let component: MobileContactUsComponent;
  let fixture: ComponentFixture<MobileContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
