import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrainingRequestComponent } from './training-request/training-request.component';

@Component({
  selector: 'app-my-training',
  templateUrl: './my-training.component.html',
  styleUrls: ['./my-training.component.scss']
})
export class MyTrainingComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(TrainingRequestComponent,{
      width:'30rem'
    })
  }

}
