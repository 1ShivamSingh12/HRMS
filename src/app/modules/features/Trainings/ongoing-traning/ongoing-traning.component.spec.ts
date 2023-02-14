import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingTraningComponent } from './ongoing-traning.component';

describe('OngoingTraningComponent', () => {
  let component: OngoingTraningComponent;
  let fixture: ComponentFixture<OngoingTraningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngoingTraningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingTraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
