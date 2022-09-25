import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingListModalComponent } from './bidding-list-modal.component';

describe('BiddingListModalComponent', () => {
  let component: BiddingListModalComponent;
  let fixture: ComponentFixture<BiddingListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
