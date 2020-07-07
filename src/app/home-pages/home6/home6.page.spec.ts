import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home6Page } from './home6.page';

describe('Home6Page', () => {
  let component: Home6Page;
  let fixture: ComponentFixture<Home6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
