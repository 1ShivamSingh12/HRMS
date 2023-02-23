import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-awards-image',
  templateUrl: './awards-image.component.html',
  styleUrls: ['./awards-image.component.scss']
})
export class AwardsImageComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  dataSource:any = [];
  render_child = false;
  @ViewChildren("listOfDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;

  ngAfterViewInit(){
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })

    setTimeout(()=>{
      this.render_child = true;
    },10)

  }

  arr = [1,2,3,4
  ];

 


  new_member_Config: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 2, lg: 1, all: 0 },
    gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
    load: 5,
    interval: {timing: 1000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }
  buttonData = {
    button:false,
    dot : false
  }


}
