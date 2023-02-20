import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsCarouselComponent } from './latest-news-carousel.component';

describe('LatestNewsCarouselComponent', () => {
  let component: LatestNewsCarouselComponent;
  let fixture: ComponentFixture<LatestNewsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestNewsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
