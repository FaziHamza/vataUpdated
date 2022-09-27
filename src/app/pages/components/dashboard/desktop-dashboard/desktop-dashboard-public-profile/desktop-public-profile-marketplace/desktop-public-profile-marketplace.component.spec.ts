import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopPublicProfileMarketplaceComponent } from './desktop-public-profile-marketplace.component';

describe('DesktopPublicProfileMarketplaceComponent', () => {
  let component: DesktopPublicProfileMarketplaceComponent;
  let fixture: ComponentFixture<DesktopPublicProfileMarketplaceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPublicProfileMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPublicProfileMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
