import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDealsProductOutletComponent } from './desktop-deals-product-outlet.component';

describe('DesktopDealsProductOutletComponent', () => {
  let component: DesktopDealsProductOutletComponent;
  let fixture: ComponentFixture<DesktopDealsProductOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDealsProductOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDealsProductOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
