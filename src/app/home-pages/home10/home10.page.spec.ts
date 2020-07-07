import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home10Page } from './home10.page';

describe('Home10Page', () => {
  let component: Home10Page;
  let fixture: ComponentFixture<Home10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
