import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopOrderComponent } from './desktop-order.component';

describe('DesktopOrderComponent', () => {
  let component: DesktopOrderComponent;
  let fixture: ComponentFixture<DesktopOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
