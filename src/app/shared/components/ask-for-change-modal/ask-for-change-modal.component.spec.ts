import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskForChangeModalComponent } from './ask-for-change-modal.component';

describe('AskForChangeModalComponent', () => {
  let component: AskForChangeModalComponent;
  let fixture: ComponentFixture<AskForChangeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskForChangeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskForChangeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
