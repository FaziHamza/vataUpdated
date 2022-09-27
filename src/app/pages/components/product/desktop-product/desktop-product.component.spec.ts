import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopProductComponent } from './desktop-product.component';

describe('DesktopProductComponent', () => {
  let component: DesktopProductComponent;
  let fixture: ComponentFixture<DesktopProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
