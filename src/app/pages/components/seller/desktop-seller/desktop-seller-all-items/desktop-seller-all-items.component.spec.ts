import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSellerAllItemsComponent } from './desktop-seller-all-items.component';

describe('DesktopSellerAllItemsComponent', () => {
  let component: DesktopSellerAllItemsComponent;
  let fixture: ComponentFixture<DesktopSellerAllItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopSellerAllItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSellerAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
