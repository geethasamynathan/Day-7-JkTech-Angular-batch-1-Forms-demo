import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rfdemo2Component } from './rfdemo2.component';

describe('Rfdemo2Component', () => {
  let component: Rfdemo2Component;
  let fixture: ComponentFixture<Rfdemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rfdemo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rfdemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
