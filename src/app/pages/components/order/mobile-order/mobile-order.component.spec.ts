import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOrderComponent } from './mobile-order.component';

describe('MobileOrderComponent', () => {
  let component: MobileOrderComponent;
  let fixture: ComponentFixture<MobileOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
