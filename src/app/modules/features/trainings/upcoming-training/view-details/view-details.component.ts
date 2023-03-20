import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnrollTrainingComponent } from './enroll-training/enroll-training.component';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(EnrollTrainingComponent,{
      width:'26rem'
    })
  }

}
