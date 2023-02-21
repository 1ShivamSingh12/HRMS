import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DIRECTORY } from 'src/app/constants/routes';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
}
