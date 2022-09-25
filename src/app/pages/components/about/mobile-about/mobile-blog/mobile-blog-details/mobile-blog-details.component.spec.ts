import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBlogDetailsComponent } from './mobile-blog-details.component';

describe('MobileBlogDetailsComponent', () => {
  let component: MobileBlogDetailsComponent;
  let fixture: ComponentFixture<MobileBlogDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBlogDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
