import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileTopDealsComponent } from './mobile-top-deals.component';

describe('MobileTopDealsComponent', () => {
  let component: MobileTopDealsComponent;
  let fixture: ComponentFixture<MobileTopDealsComponent>;

  beforeEach(waitForAsync(() => {
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
