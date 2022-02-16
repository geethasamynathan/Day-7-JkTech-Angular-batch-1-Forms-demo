import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveformdemo1Component } from './reactiveformdemo1.component';

describe('Reactiveformdemo1Component', () => {
  let component: Reactiveformdemo1Component;
  let fixture: ComponentFixture<Reactiveformdemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reactiveformdemo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactiveformdemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
