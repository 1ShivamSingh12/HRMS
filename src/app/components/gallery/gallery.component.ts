import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
  }
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
    load: 5,
    interval: {timing: 2000, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [
    1,2,3,4,5
  ];


  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
