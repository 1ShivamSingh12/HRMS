import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
  animations : [
    slideInAnimation
  ]
})
export class ProfilePictureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
