import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categories2Page } from './categories2.page';

describe('Categories2Page', () => {
  let component: Categories2Page;
  let fixture: ComponentFixture<Categories2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categories2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categories2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
