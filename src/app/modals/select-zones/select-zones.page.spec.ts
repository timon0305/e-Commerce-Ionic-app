import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectZonesPage } from './select-zones.page';

describe('SelectZonesPage', () => {
  let component: SelectZonesPage;
  let fixture: ComponentFixture<SelectZonesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectZonesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectZonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
