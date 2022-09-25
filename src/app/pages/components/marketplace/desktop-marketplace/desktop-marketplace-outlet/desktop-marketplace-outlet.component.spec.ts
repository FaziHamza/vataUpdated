import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopMarketplaceOutletComponent } from './desktop-marketplace-outlet.component';

describe('DesktopMarketplaceOutletComponent', () => {
  let component: DesktopMarketplaceOutletComponent;
  let fixture: ComponentFixture<DesktopMarketplaceOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopMarketplaceOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopMarketplaceOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
