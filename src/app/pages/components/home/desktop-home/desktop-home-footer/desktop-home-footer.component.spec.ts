import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopHomeFooterComponent } from './desktop-home-footer.component';

describe('DesktopHomeFooterComponent', () => {
  let component: DesktopHomeFooterComponent;
  let fixture: ComponentFixture<DesktopHomeFooterComponent>;

  beforeEach(async(() => {
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
