import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMembersCarouselComponent } from './new-members-carousel.component';

describe('NewMembersCarouselComponent', () => {
  let component: NewMembersCarouselComponent;
  let fixture: ComponentFixture<NewMembersCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMembersCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMembersCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
