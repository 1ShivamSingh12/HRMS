import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NguCarouselConfig } from '@ngu/carousel';
import { CarouselDialogComponent } from '../../dialog/carousel-dialog/carousel-dialog.component';

@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.scss']
})
export class GalleryCarouselComponent implements OnInit {

  constructor(private dialog : MatDialog) { }
  ngOnInit(): void {

  }



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

  listofImage = [
    { image: 'award_1660310382113.jpg' },
    { image: 'award_1656582283345.JPG' },
    { image: 'award_1672292016846.jpg' },
    { image: 'award_1672378171227.jpg' },
    { image: 'award_1565349878201.jpg' },

  ];

  new_member_Config: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 2, lg: 3, all: 0 },
    gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
    load: 5,
    interval: {timing: 2000, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2
  }
  buttonData = {
    button:false,
    dot : true
  }
  options:MatDialogConfig = {
    width:'48rem',
    panelClass: 'app-full-bleed-dialog',
  }
  openDialog(){
    this.dialog.open(CarouselDialogComponent,this.options)
  }

}
