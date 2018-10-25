import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscPage } from './misc.page';

describe('MiscPage', () => {
  let component: MiscPage;
  let fixture: ComponentFixture<MiscPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
