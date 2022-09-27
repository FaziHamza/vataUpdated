import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopTermsOfUseComponent } from './desktop-terms-of-use.component';

describe('TermsOfUseComponent', () => {
  let component: DesktopTermsOfUseComponent;
  let fixture: ComponentFixture<DesktopTermsOfUseComponent>;

  beforeEach(waitForAsync(() => {
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
