import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedModalComponent } from './authorized-modal.component';

describe('AuthorizedModalComponent', () => {
  let component: AuthorizedModalComponent;
  let fixture: ComponentFixture<AuthorizedModalComponent>;

  beforeEach(async(() => {
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
