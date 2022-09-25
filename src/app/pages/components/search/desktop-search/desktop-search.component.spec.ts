import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSearchComponent } from './desktop-search.component';

describe('DesktopSearchComponent', () => {
  let component: DesktopSearchComponent;
  let fixture: ComponentFixture<DesktopSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
