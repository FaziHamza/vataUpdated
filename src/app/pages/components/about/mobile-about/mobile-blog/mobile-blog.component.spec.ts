import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBlogComponent } from './mobile-blog.component';

describe('MobileBlogComponent', () => {
  let component: MobileBlogComponent;
  let fixture: ComponentFixture<MobileBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
