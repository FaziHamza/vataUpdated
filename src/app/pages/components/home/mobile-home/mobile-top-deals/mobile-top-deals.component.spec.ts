import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTopDealsComponent } from './mobile-top-deals.component';

describe('MobileTopDealsComponent', () => {
  let component: MobileTopDealsComponent;
  let fixture: ComponentFixture<MobileTopDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileTopDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTopDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
