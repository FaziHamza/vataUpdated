import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileHomeHeaderComponent } from './mobile-home-header.component';

describe('MobileHomeHeaderComponent', () => {
  let component: MobileHomeHeaderComponent;
  let fixture: ComponentFixture<MobileHomeHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileHomeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
