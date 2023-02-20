import { Component, OnInit } from '@angular/core';

import { myProfileAnimation } from 'src/app/animations/myProfileAnimation';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
  animations: [myProfileAnimation],
})
export class ProfilePictureComponent implements OnInit {
  imagePath: any;
  imgURL: any;
  constructor() {}

  ngOnInit(): void {}

  preview(files: any) {
    // console.log(files, 'kk');

    if (files.length === 0) return;

    var reader = new FileReader();
    console.log(reader);

    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      // let x = reader.result?.toString();
      // let rawData = x?.split(',')?.pop();
      // console.log(rawData,'skwe');
      this.imgURL = reader.result
    };
  }
}
