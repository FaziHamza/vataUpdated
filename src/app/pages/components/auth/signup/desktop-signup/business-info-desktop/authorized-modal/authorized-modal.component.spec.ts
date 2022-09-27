import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuthorizedModalComponent } from './authorized-modal.component';

describe('AuthorizedModalComponent', () => {
  let component: AuthorizedModalComponent;
  let fixture: ComponentFixture<AuthorizedModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
