import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankModalPage } from './blank-modal.page';

describe('BlankModalPage', () => {
  let component: BlankModalPage;
  let fixture: ComponentFixture<BlankModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
