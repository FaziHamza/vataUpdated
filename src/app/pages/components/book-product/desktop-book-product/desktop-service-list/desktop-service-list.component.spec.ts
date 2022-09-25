import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopServiceListComponent } from './desktop-service-list.component';

describe('DesktopServiceListComponent', () => {
  let component: DesktopServiceListComponent;
  let fixture: ComponentFixture<DesktopServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
