import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopFaqComponent } from './desktop-faq.component';

describe('FaqComponent', () => {
  let component: DesktopFaqComponent;
  let fixture: ComponentFixture<DesktopFaqComponent>;

  beforeEach(async(() => {
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
