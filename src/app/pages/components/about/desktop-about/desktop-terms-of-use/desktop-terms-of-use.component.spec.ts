import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopTermsOfUseComponent } from './desktop-terms-of-use.component';

describe('TermsOfUseComponent', () => {
  let component: DesktopTermsOfUseComponent;
  let fixture: ComponentFixture<DesktopTermsOfUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopTermsOfUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopTermsOfUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
