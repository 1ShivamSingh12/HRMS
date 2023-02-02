import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  toggle = true
  constructor() { }

  ngOnInit(): void {
  }

  show(){
    if(this.toggle == true){
    this.toggle = false
    }else{
      this.toggle = true
    }
  }

  get newYear() {
    return new Date().getFullYear();
  }

}
