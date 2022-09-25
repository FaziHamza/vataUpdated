import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDealsComponent } from './mobile-deals.component';

describe('MobileDealsComponent', () => {
  let component: MobileDealsComponent;
  let fixture: ComponentFixture<MobileDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
