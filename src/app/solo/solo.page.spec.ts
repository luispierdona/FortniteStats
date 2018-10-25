import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloPage } from './solo.page';

describe('SoloPage', () => {
  let component: SoloPage;
  let fixture: ComponentFixture<SoloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
