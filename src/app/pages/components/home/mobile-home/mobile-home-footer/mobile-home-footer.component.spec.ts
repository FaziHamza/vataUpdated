import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomeFooterComponent } from './mobile-home-footer.component';

describe('MobileHomeFooterComponent', () => {
  let component: MobileHomeFooterComponent;
  let fixture: ComponentFixture<MobileHomeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileHomeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHomeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
