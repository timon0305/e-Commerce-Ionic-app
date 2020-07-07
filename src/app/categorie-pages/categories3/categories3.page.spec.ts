import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categories3Page } from './categories3.page';

describe('Categories3Page', () => {
  let component: Categories3Page;
  let fixture: ComponentFixture<Categories3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categories3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categories3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
