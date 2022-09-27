import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopFaqComponent } from './desktop-faq.component';

describe('FaqComponent', () => {
  let component: DesktopFaqComponent;
  let fixture: ComponentFixture<DesktopFaqComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
