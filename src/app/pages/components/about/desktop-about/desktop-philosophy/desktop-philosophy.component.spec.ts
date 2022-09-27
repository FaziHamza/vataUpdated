import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopPhilosophyComponent } from './desktop-philosophy.component';

describe('PhilosophyComponent', () => {
  let component: DesktopPhilosophyComponent;
  let fixture: ComponentFixture<DesktopPhilosophyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopPhilosophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopPhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
