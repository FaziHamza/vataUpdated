import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileFaqComponent } from './mobile-faq.component';

describe('MobileFaqComponent', () => {
  let component: MobileFaqComponent;
  let fixture: ComponentFixture<MobileFaqComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
