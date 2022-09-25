import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDealsCardComponent } from './top-deals-card.component';

describe('TopDealsCardComponent', () => {
  let component: TopDealsCardComponent;
  let fixture: ComponentFixture<TopDealsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDealsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDealsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
