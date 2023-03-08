import { Component, OnInit } from '@angular/core';
import { myProfileAnimation } from 'src/app/animations/myProfileAnimation';

@Component({
  selector: 'app-appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.scss'],
  animations: [
    myProfileAnimation
  ],
})
export class AppraisalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
