import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DealsContainerComponent } from './deals-container.component';

describe('DealsContainerComponent', () => {
  let component: DealsContainerComponent;
  let fixture: ComponentFixture<DealsContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
