import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopAboutComponent } from './desktop-about.component';

describe('DesktopAboutComponent', () => {
  let component: DesktopAboutComponent;
  let fixture: ComponentFixture<DesktopAboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
