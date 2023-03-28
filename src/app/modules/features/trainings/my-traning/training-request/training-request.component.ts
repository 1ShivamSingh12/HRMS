import { Component, OnInit } from '@angular/core';
import { commondropDown } from 'src/app/constants/drop_down_data';

@Component({
  selector: 'app-training-request',
  templateUrl: './training-request.component.html',
  styleUrls: ['./training-request.component.scss']
})
export class TrainingRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dropDown = commondropDown

}
