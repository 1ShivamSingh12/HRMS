import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProfilePictureSelector } from 'src/app/store/state.selector';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {

  viewMode = 'basic_information';
  myProfileData:any
  img:any
    constructor(private store : Store,private http: HttpClient) {
    this.store.select(getProfilePictureSelector).subscribe((res:any)=>{
      this.img = res.profile
    })
  }

  ngOnInit(): void {
    console.log('wekfvwfe');
    this.http.post('http://localhost:4000/my-profile',{email:localStorage.getItem('email')}).subscribe((res: any) => {
      console.log(res[0], 'kewfeufk');
      this.myProfileData = res[0]
    });

  }
}
