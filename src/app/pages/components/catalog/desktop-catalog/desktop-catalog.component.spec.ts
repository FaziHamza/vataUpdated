import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopCatalogComponent } from './desktop-catalog.component';

describe('DesktopCatalogComponent', () => {
  let component: DesktopCatalogComponent;
  let fixture: ComponentFixture<DesktopCatalogComponent>;

  beforeEach(waitForAsync(() => {
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
