import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnrollTrainingComponent } from './view-details/enroll-training/enroll-training.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

@Component({
  selector: 'app-upcoming-training',
  templateUrl: './upcoming-training.component.html',
  styleUrls: ['./upcoming-training.component.scss']
})
export class UpcomingTrainingComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(EnrollTrainingComponent)
  }

}
