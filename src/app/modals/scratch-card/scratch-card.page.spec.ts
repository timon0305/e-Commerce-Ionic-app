import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchCardPage } from './scratch-card.page';

describe('ScratchCardPage', () => {
  let component: ScratchCardPage;
  let fixture: ComponentFixture<ScratchCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScratchCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScratchCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
