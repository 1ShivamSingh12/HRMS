import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PitchDataService implements OnInit {

  data:any
  constructor() { }
  ngOnInit(): void {
    console.log(this.data,'lll');

  }

}
