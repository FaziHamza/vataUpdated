import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopCatalogComponent } from './desktop-catalog.component';

describe('DesktopCatalogComponent', () => {
  let component: DesktopCatalogComponent;
  let fixture: ComponentFixture<DesktopCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
