import { Component, OnInit } from '@angular/core';

import { myProfileAnimation } from 'src/app/animations/myProfileAnimation';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
  animations: [myProfileAnimation],
})
export class ProfilePictureComponent implements OnInit {
  imagePath: any;
  imgURL: any;
  size! : number
  constructor(private snackbar : SnackbarService) {}

  ngOnInit(): void {}

  preview(files: any) {
    console.log(files[0].type);

    this.size = files[0].size
    let type = files[0].type
    if(this.size <= 1000000 && (type == 'image/jpeg' || type == 'image/png' || type == 'image/gif')){

      if (files.length === 0) return;
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);

      reader.onload = (_event) => {
        // let x = reader.result?.toString();
        // let rawData = x?.split(',')?.pop();
        // console.log(rawData,'skwe');
        this.imgURL = reader.result
      };
    }else if(this.size >= 1000000){
      this.snackbar.openSnackBarErr('File limit is 1Mb','red-snackbar')
    }else{
      this.snackbar.openSnackBarErr('File Type should be png , jpg , jpeg , gif' , 'red-snackbar')
    }
  }
}
