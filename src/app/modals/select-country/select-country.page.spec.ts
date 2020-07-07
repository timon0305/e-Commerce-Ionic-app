import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCountryPage } from './select-country.page';

describe('SelectCountryPage', () => {
  let component: SelectCountryPage;
  let fixture: ComponentFixture<SelectCountryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCountryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
