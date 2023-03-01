import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceCalenderComponent } from './attendance-calender.component';

describe('AttendanceCalenderComponent', () => {
  let component: AttendanceCalenderComponent;
  let fixture: ComponentFixture<AttendanceCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
