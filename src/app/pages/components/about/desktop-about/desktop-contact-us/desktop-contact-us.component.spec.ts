import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopContactUsComponent } from './desktop-contact-us.component';

describe('ContactUsComponent', () => {
  let component: DesktopContactUsComponent;
  let fixture: ComponentFixture<DesktopContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
