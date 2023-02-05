import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
