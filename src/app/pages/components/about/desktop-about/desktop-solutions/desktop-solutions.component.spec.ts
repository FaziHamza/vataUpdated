import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSolutionsComponent } from './desktop-solutions.component';

describe('SolutionsComponent', () => {
  let component: DesktopSolutionsComponent;
  let fixture: ComponentFixture<DesktopSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
