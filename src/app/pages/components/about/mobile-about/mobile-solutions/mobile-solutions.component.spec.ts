import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSolutionsComponent } from './mobile-solutions.component';

describe('MobileSolutionsComponent', () => {
  let component: MobileSolutionsComponent;
  let fixture: ComponentFixture<MobileSolutionsComponent>;

  beforeEach(async(() => {
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
