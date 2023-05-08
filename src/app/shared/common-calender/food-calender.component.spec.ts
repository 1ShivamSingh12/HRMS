import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCalenderComponent } from './food-calender.component';

describe('FoodCalenderComponent', () => {
  let component: FoodCalenderComponent;
  let fixture: ComponentFixture<FoodCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
