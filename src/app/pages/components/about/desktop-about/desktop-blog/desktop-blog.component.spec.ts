import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBlogComponent } from './desktop-blog.component';

describe('BlogComponent', () => {
  let component: DesktopBlogComponent;
  let fixture: ComponentFixture<DesktopBlogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
