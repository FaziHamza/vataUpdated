import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileSolutionsComponent } from './mobile-solutions.component';

describe('MobileSolutionsComponent', () => {
  let component: MobileSolutionsComponent;
  let fixture: ComponentFixture<MobileSolutionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
