import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit,AfterViewInit {

  constructor(private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.buttondata,'kkkk');

    // console.log(this.carouselData,"cd47");
    if(this.inputs){
      this.carouselConfig = this.inputs
    }
  }
  ngAfterViewInit(){
    this.cdr.detectChanges()
  }

  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  @Input() carouselData:any
  @Input() inputs : any
  @Input() buttondata : any


  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    // gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
    load: 3,
    interval: {timing: 1000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [1,2,3];
}
