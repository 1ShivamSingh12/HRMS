import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsImageComponent } from './awards-image.component';

describe('AwardsImageComponent', () => {
  let component: AwardsImageComponent;
  let fixture: ComponentFixture<AwardsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardsImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
