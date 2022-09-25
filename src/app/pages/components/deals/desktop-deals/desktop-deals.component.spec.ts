import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDealsComponent } from './desktop-deals.component';

describe('DesktopDealsComponent', () => {
  let component: DesktopDealsComponent;
  let fixture: ComponentFixture<DesktopDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
