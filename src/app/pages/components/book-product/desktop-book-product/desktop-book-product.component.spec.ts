import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopBookProductComponent } from './desktop-book-product.component';

describe('DesktopBookProductComponent', () => {
  let component: DesktopBookProductComponent;
  let fixture: ComponentFixture<DesktopBookProductComponent>;

  beforeEach(waitForAsync(() => {
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
