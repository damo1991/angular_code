/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SingledataComponent } from './singledata.component';

describe('SingledataComponent', () => {
  let component: SingledataComponent;
  let fixture: ComponentFixture<SingledataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingledataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
