import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}


  ngOnInit(): void {
  }

  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 2, lg: 3, all: 0 },
    // gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
    load: 3,
    interval: {timing: 2000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [1,2,3,4];

  buttonData = {
    button:false
  }


  arr:any = [
    {
      division_name:'appreciate'
    },
    {
      division_name:'awards'
    },
    {
      division_name:'birthdays'
    },
    {
      division_name:'anniversary'
    }
  ]

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })

    setTimeout(()=>{
      this.render_child = true;
    },10)
  }

  // arr = [1,2,3]

  dataSource:any = [];
  render_child = false;
  @ViewChildren("listOfDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;


}
