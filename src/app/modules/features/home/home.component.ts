import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  images :any

  ngOnInit(): void {

  }
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 2, lg: 1, all: 0 },
    gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
    load: 3,
    interval: {timing: 2000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [1,2,3];

  @ViewChild('myCarousel1') myCarousel1!: NguCarousel<any>;
  carouselConfig1: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
    load: 3,
    interval: {timing: 2000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselItems1 = [1,2,3];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
