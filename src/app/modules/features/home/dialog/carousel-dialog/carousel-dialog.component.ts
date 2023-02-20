import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-carousel-dialog',
  templateUrl: './carousel-dialog.component.html',
  styleUrls: ['./carousel-dialog.component.scss'],
})
export class CarouselDialogComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef,private dialogRef: MatDialogRef<CarouselDialogComponent>) {
    this.dialogRef.disableClose = true
  }

  ngOnInit(): void {}


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

  galleyConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    // gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
    load: 3,
    interval: {timing: 500, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [1, 2, 3, 4, 5];

  listofImage = [
    { image: 'award_1660310382113.jpg' },
    { image: 'award_1665553979253.jpg' },
    { image: 'award_1672378171227.jpg' },
    { image: 'award_1672292016846.jpg' },
    { image: 'award_1672378171227.jpg' },
  ];

  buttonData = {
    button : false,
    dot :true
  }


}
