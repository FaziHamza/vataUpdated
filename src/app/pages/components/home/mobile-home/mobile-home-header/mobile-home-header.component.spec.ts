import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomeHeaderComponent } from './mobile-home-header.component';

describe('MobileHomeHeaderComponent', () => {
  let component: MobileHomeHeaderComponent;
  let fixture: ComponentFixture<MobileHomeHeaderComponent>;

  beforeEach(async(() => {
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
