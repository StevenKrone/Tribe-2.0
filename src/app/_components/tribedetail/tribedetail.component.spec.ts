/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TribedetailComponent } from './tribedetail.component';

describe('TribedetailComponent', () => {
  let component: TribedetailComponent;
  let fixture: ComponentFixture<TribedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
