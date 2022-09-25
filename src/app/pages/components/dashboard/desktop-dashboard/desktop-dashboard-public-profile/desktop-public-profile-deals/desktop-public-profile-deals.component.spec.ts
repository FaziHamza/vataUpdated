import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPublicProfileDealsComponent } from './desktop-public-profile-deals.component';

describe('DesktopPublicProfileDealsComponent', () => {
  let component: DesktopPublicProfileDealsComponent;
  let fixture: ComponentFixture<DesktopPublicProfileDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPublicProfileDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPublicProfileDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
