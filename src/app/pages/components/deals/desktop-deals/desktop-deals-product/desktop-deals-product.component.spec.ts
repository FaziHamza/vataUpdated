import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDealsProductComponent } from './desktop-deals-product.component';

describe('DesktopDealsProductComponent', () => {
  let component: DesktopDealsProductComponent;
  let fixture: ComponentFixture<DesktopDealsProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDealsProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDealsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
