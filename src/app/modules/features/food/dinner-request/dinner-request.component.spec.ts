import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerRequestComponent } from './dinner-request.component';

describe('DinnerRequestComponent', () => {
  let component: DinnerRequestComponent;
  let fixture: ComponentFixture<DinnerRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinnerRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
