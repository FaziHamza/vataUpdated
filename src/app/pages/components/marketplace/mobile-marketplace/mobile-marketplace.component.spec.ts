import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMarketplaceComponent } from './mobile-marketplace.component';

describe('MobileMarketplaceComponent', () => {
  let component: MobileMarketplaceComponent;
  let fixture: ComponentFixture<MobileMarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
