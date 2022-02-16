import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FBdemoComponent } from './fbdemo.component';

describe('FBdemoComponent', () => {
  let component: FBdemoComponent;
  let fixture: ComponentFixture<FBdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FBdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FBdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
