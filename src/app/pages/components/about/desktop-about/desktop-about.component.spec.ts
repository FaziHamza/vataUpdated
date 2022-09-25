import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopAboutComponent } from './desktop-about.component';

describe('DesktopAboutComponent', () => {
  let component: DesktopAboutComponent;
  let fixture: ComponentFixture<DesktopAboutComponent>;

  beforeEach(async(() => {
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
