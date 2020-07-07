import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home9Page } from './home9.page';

describe('Home9Page', () => {
  let component: Home9Page;
  let fixture: ComponentFixture<Home9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
