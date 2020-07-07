import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardPointsPage } from './reward-points.page';

describe('RewardPointsPage', () => {
  let component: RewardPointsPage;
  let fixture: ComponentFixture<RewardPointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardPointsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardPointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
