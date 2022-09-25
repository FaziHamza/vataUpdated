import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhilosophyComponent } from './mobile-philosophy.component';

describe('MobilePhilosophyComponent', () => {
  let component: MobilePhilosophyComponent;
  let fixture: ComponentFixture<MobilePhilosophyComponent>;

  beforeEach(async(() => {
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
