import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsDetailsComponent } from './trainings-details.component';

describe('TrainingsDetailsComponent', () => {
  let component: TrainingsDetailsComponent;
  let fixture: ComponentFixture<TrainingsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
