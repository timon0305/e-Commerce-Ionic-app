import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categories6Page } from './categories6.page';

describe('Categories6Page', () => {
  let component: Categories6Page;
  let fixture: ComponentFixture<Categories6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categories6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categories6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
