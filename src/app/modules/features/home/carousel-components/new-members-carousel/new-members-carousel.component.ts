import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-new-members-carousel',
  templateUrl: './new-members-carousel.component.html',
  styleUrls: ['./new-members-carousel.component.scss']
})
export class NewMembersCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arr = [1,2,3]

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

    setTimeout(()=>{
      this.render_child = true;
    },10)

  }
  new_member_Config: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 2, lg: 1, all: 0 },
    gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
    load: 5,
    interval: {timing: 2000, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2
  }
  buttonData = {
    button:true,
    dot : false
  }

 
}
