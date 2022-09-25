import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageWebComponent } from './homepage-web.component';

describe('HomepageWebComponent', () => {
  let component: HomepageWebComponent;
  let fixture: ComponentFixture<HomepageWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
