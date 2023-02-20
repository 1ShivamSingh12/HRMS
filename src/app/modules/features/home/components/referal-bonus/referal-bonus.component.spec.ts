import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalBonusComponent } from './referal-bonus.component';

describe('ReferalBonusComponent', () => {
  let component: ReferalBonusComponent;
  let fixture: ComponentFixture<ReferalBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferalBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
