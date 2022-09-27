import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopAddMarketplaceComponent } from './desktop-add-marketplace.component';

describe('DesktopAddMarketplaceComponent', () => {
  let component: DesktopAddMarketplaceComponent;
  let fixture: ComponentFixture<DesktopAddMarketplaceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopAddMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopAddMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
