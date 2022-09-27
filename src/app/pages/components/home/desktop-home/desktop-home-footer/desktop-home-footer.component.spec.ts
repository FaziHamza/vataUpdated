import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopHomeFooterComponent } from './desktop-home-footer.component';

describe('DesktopHomeFooterComponent', () => {
  let component: DesktopHomeFooterComponent;
  let fixture: ComponentFixture<DesktopHomeFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopHomeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopHomeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
