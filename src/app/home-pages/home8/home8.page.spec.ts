import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home8Page } from './home8.page';

describe('Home8Page', () => {
  let component: Home8Page;
  let fixture: ComponentFixture<Home8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
