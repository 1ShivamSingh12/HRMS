import { Component, Input, OnInit } from '@angular/core';
import { Options } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() config! : Options
}
