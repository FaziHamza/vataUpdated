import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopTopDealsComponent } from './desktop-top-deals.component';

describe('DesktopTopDealsComponent', () => {
  let component: DesktopTopDealsComponent;
  let fixture: ComponentFixture<DesktopTopDealsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopTopDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopTopDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
