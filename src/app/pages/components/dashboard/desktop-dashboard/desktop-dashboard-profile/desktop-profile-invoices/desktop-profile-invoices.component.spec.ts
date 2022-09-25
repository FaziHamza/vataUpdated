import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopProfileInvoicesComponent } from './desktop-profile-invoices.component';

describe('DesktopProfileInvoicesComponent', () => {
  let component: DesktopProfileInvoicesComponent;
  let fixture: ComponentFixture<DesktopProfileInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopProfileInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopProfileInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
