import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  images :any

  ngOnInit(): void {
    this.images = [
      {path: 'https://source.unsplash.com/800x600/?nature'},
      {path: 'https://source.unsplash.com/800x600/?car'},
      {path: 'https://source.unsplash.com/800x600/?moto'},
    ]
  }

}
