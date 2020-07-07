import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3Page } from './home3.page';

describe('Home3Page', () => {
  let component: Home3Page;
  let fixture: ComponentFixture<Home3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
