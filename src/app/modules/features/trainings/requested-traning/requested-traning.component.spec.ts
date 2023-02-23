import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedTraningComponent } from './requested-traning.component';

describe('RequestedTraningComponent', () => {
  let component: RequestedTraningComponent;
  let fixture: ComponentFixture<RequestedTraningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedTraningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedTraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
