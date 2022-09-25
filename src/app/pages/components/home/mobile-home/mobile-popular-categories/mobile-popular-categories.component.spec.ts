import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePopularCategoriesComponent } from './mobile-popular-categories.component';

describe('MobilePopularCategoriesComponent', () => {
  let component: MobilePopularCategoriesComponent;
  let fixture: ComponentFixture<MobilePopularCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePopularCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePopularCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
