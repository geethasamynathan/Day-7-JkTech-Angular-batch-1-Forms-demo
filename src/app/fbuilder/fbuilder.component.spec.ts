import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbuilderComponent } from './fbuilder.component';

describe('FbuilderComponent', () => {
  let component: FbuilderComponent;
  let fixture: ComponentFixture<FbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
