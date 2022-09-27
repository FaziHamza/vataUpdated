import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileAboutComponent } from './mobile-about.component';

describe('MobileAboutComponent', () => {
  let component: MobileAboutComponent;
  let fixture: ComponentFixture<MobileAboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
