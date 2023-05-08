import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/animations/animations';
import { GoogleAuthProvider } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations:[
    slideInAnimation
  ]
})
export class LoginComponent implements OnInit {

  toggle = true
  constructor() { }

  ngOnInit(): void {
    const provider = new GoogleAuthProvider();

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
