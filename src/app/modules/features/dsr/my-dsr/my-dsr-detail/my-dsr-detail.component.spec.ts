import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDsrDetailComponent } from './my-dsr-detail.component';

describe('MyDsrDetailComponent', () => {
  let component: MyDsrDetailComponent;
  let fixture: ComponentFixture<MyDsrDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDsrDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDsrDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
