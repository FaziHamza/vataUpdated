import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBlogDetailsComponent } from './desktop-blog-details.component';

describe('DesktopBlogDetailsComponent', () => {
  let component: DesktopBlogDetailsComponent;
  let fixture: ComponentFixture<DesktopBlogDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBlogDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
