import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListPage } from './wish-list.page';

describe('WishListPage', () => {
  let component: WishListPage;
  let fixture: ComponentFixture<WishListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
