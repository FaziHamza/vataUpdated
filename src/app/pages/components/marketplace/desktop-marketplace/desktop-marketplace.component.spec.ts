import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopMarketplaceComponent } from './desktop-marketplace.component';

describe('DesktopMarketplaceComponent', () => {
  let component: DesktopMarketplaceComponent;
  let fixture: ComponentFixture<DesktopMarketplaceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
