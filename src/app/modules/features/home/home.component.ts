import { HttpClient } from '@angular/common/http';
import {Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProfilePictureSelector } from 'src/app/store/state.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  img:any
  myProfileData:any

  ngOnInit(): void {
    this.store.select(getProfilePictureSelector).subscribe((res:any)=>{
      this.img = res.profile
    })

    this.http.post('http://localhost:4000/my-profile',{email:localStorage.getItem('email')}).subscribe((res: any) => {
      console.log(res[0], 'kewfeufk');
      this.myProfileData = res[0]
    });
  }
  constructor(private store : Store,private http: HttpClient) {}



}
