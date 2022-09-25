import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductContainerComponent } from './add-product-container.component';

describe('AddProductContainerComponent', () => {
  let component: AddProductContainerComponent;
  let fixture: ComponentFixture<AddProductContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
