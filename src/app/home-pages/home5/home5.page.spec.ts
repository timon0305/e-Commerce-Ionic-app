import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home5Page } from './home5.page';

describe('Home5Page', () => {
  let component: Home5Page;
  let fixture: ComponentFixture<Home5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
