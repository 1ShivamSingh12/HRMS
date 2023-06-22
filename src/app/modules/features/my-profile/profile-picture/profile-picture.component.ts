import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { myProfileAnimation } from 'src/app/animations/myProfileAnimation';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { getProfilePicture } from 'src/app/store/state.actions';
import { getProfilePictureSelector } from 'src/app/store/state.selector';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
  animations: [
    myProfileAnimation
  ],
})
export class ProfilePictureComponent implements OnInit {

  imagePath: any;
  imgURL: any;
  size! : number
  img!: CloudinaryImage;
  constructor(private snackbar : SnackbarService , private store : Store, private http: HttpClient) {}

  ngOnInit(): void {
    this.api()
  }

  profilePic:any

  image:any

  api(){
    this.http.post('http://localhost:4000/my-profile',{'email':localStorage.getItem('email')}).subscribe((res: any) => {
      console.log(res,'qewkfugqwf');
      this.imgURL = res[0].profilePic;
    });

  }


  imageBase64:any
  preview(files: any) {

    this.size = files[0].size
    let type = files[0].type
    if(this.size <= 1000000 && (type == 'image/jpeg' || type == 'image/png' || type == 'image/gif')){

      if (files.length === 0) return;
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {

        this.imgURL = reader.result
        // this.store.dispatch(getProfilePicture({profile:reader.result}))
        // let x = reader.result?.toString();
        // let rawData = x?.split(',')?.pop();
        // console.log(rawData,'skwe');
        // this.imgURL = reader.result
        this.imageBase64 = reader.result


        console.log(reader.result,'wefk');

      };
    }else if(this.size >= 1000000){
      this.snackbar.openSnackBarErr('File limit is 1Mb','red-snackbar')
    }else{
      this.snackbar.openSnackBarErr('File Type should be png , jpg , jpeg , gif' , 'red-snackbar')
    }
  }

async saveProfile() {
    const data = new FormData()

    data.append("file", this.imageBase64);
    data.append("upload_preset", "hrms-image");
    data.append("cloud_name", "dtref6kzu");

    await <any>this.http.post("https://api.cloudinary.com/v1_1/dtref6kzu/image/upload", data).subscribe((res: any) => {
      console.log(res.url, 'jwhvwh');
      this.http.patch("http://localhost:4000/my-profile-insert", { payload: res.url }).subscribe((res: any) => {
        this.api()
      });
    })
  }

}
