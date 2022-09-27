import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopAboutSidebarComponent } from './desktop-about-sidebar.component';

describe('DesktopAboutSidebarComponent', () => {
  let component: DesktopAboutSidebarComponent;
  let fixture: ComponentFixture<DesktopAboutSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopAboutSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopAboutSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
