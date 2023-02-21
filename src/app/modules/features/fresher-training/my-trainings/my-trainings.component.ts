import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VIEW_DETAILS } from 'src/app/constants/routes';

@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.scss']
})
export class MyTrainingsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  openViewDetail(){
    this.route.navigate([VIEW_DETAILS.fullurl])
  }
}
