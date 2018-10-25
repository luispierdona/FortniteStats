import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuoPage } from './duo.page';

describe('DuoPage', () => {
  let component: DuoPage;
  let fixture: ComponentFixture<DuoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
