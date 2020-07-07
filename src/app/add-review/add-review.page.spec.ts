import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewPage } from './add-review.page';

describe('AddReviewPage', () => {
  let component: AddReviewPage;
  let fixture: ComponentFixture<AddReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
