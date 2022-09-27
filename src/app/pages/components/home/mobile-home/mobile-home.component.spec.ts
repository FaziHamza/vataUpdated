import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileHomeComponent } from './mobile-home.component';

describe('MobileHomeComponent', () => {
  let component: MobileHomeComponent;
  let fixture: ComponentFixture<MobileHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
