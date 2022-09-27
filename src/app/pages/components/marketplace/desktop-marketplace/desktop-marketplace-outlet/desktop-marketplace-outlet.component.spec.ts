import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopMarketplaceOutletComponent } from './desktop-marketplace-outlet.component';

describe('DesktopMarketplaceOutletComponent', () => {
  let component: DesktopMarketplaceOutletComponent;
  let fixture: ComponentFixture<DesktopMarketplaceOutletComponent>;

  beforeEach(waitForAsync(() => {
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
