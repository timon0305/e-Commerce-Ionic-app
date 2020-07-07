import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4Page } from './home4.page';

describe('Home4Page', () => {
  let component: Home4Page;
  let fixture: ComponentFixture<Home4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
