import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsPage } from './downloads.page';

describe('DownloadsPage', () => {
  let component: DownloadsPage;
  let fixture: ComponentFixture<DownloadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
