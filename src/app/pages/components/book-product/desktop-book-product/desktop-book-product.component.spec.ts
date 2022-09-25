import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopBookProductComponent } from './desktop-book-product.component';

describe('DesktopBookProductComponent', () => {
  let component: DesktopBookProductComponent;
  let fixture: ComponentFixture<DesktopBookProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopBookProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopBookProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
