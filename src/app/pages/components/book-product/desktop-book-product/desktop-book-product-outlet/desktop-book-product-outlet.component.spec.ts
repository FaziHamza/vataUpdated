import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopBookProductOutletComponent } from './desktop-book-product-outlet.component';

describe('DesktopBookProductOutletComponent', () => {
  let component: DesktopBookProductOutletComponent;
  let fixture: ComponentFixture<DesktopBookProductOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookProductOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookProductOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
