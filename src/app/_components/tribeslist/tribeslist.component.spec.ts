/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TribeslistComponent } from './tribeslist.component';

describe('TribeslistComponent', () => {
  let component: TribeslistComponent;
  let fixture: ComponentFixture<TribeslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribeslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
