import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundPolicyPage } from './refund-policy.page';

describe('RefundPolicyPage', () => {
  let component: RefundPolicyPage;
  let fixture: ComponentFixture<RefundPolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundPolicyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
