import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceCategoriesComponent } from './marketplace-categories.component';

describe('MarketplaceCategoriesComponent', () => {
  let component: MarketplaceCategoriesComponent;
  let fixture: ComponentFixture<MarketplaceCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
