import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollTrainingComponent } from './enroll-training.component';

describe('EnrollTrainingComponent', () => {
  let component: EnrollTrainingComponent;
  let fixture: ComponentFixture<EnrollTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
