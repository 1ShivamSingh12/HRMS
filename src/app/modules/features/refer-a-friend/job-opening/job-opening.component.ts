import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.scss']
})
export class JobOpeningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  divs:Array<any> = [1,2,3,4]

}
