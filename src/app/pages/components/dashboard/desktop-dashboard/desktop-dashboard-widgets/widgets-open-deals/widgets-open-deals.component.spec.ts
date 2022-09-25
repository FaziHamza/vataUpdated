import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsOpenDealsComponent } from './widgets-open-deals.component';

describe('WidgetsOpenDealsComponent', () => {
  let component: WidgetsOpenDealsComponent;
  let fixture: ComponentFixture<WidgetsOpenDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsOpenDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsOpenDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
