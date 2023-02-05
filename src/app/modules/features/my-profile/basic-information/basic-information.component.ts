import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
  animations:[
    slideInAnimation
  ]
})
export class BasicInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
