import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobilePhilosophyComponent } from './mobile-philosophy.component';

describe('MobilePhilosophyComponent', () => {
  let component: MobilePhilosophyComponent;
  let fixture: ComponentFixture<MobilePhilosophyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePhilosophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
