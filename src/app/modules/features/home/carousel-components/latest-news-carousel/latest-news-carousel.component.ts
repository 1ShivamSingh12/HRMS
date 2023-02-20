import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-latest-news-carousel',
  templateUrl: './latest-news-carousel.component.html',
  styleUrls: ['./latest-news-carousel.component.scss']
})
export class LatestNewsCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  appinventiv_latest = [
    {
      division_name:'Apprecitaion'
    },
    {
      division_name:'Birthday Celebration'
    },
    {
      division_name:'Work Anniversary'
    },
    {
      division_name:'Awards'
    }

  ]

  dataSource:any = [];
  render_child = false;
  @ViewChildren("listOfDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;

  newOpeningsData = {
    showButtons:false

  }

  ngAfterViewInit(){

    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })
    console.log(this.dataSource,"DS");

    setTimeout(()=>{
      this.render_child = true;
    },10)

  }

  app_latest_gridConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 2, lg: 3, all: 0 },
    gridBreakpoints:{sm: 750, md: 1000, lg: 1200, xl: 1200},
    load: 3,
    interval: {timing: 500, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2
  }

  buttonData = {
    button:false,
    dot : true
  }

}
