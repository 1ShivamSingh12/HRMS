import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VIEW_DETAILS } from 'src/app/constants/routes';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.scss']
})
export class MyTrainingsComponent implements OnInit {

  constructor(private route:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openViewDetail(){
    this.route.navigate([VIEW_DETAILS.fullurl])
  }

  options: MatDialogConfig = {
    autoFocus:false,
    width: '35rem',
    height:'85%',
    panelClass: 'feedback-form',
  };

  openDialog(){
    this.dialog.open(FeedbackFormComponent,this.options)
  }
}
