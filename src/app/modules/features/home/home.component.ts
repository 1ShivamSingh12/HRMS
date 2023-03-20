import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {

  }

  constructor(private cdr: ChangeDetectorRef) {}



}
