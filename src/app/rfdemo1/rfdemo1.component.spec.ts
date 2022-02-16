import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFdemo1Component } from './rfdemo1.component';

describe('RFdemo1Component', () => {
  let component: RFdemo1Component;
  let fixture: ComponentFixture<RFdemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RFdemo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RFdemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
