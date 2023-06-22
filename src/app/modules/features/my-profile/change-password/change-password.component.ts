import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { myProfileAnimation } from 'src/app/animations/myProfileAnimation';
import { COMMON_VALIDATION, MIN_LENGTH } from 'src/app/constants/Validations';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  animations: [
    myProfileAnimation
  ],
})
export class ChangePasswordComponent implements OnInit {
  password!:FormGroup
  constructor(private fb:FormBuilder , private snackabr : SnackbarService,private http : HttpClient) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.password = this.fb.group({
      old_pass: ['', [COMMON_VALIDATION , MIN_LENGTH]],
      new_pass: ['', [COMMON_VALIDATION, MIN_LENGTH]],
      confirm_pass: ['', [COMMON_VALIDATION , MIN_LENGTH]],
    });
  }

  save(){
    if(this.password.valid){
      let params = {
        data : this.password.value,
        email:localStorage.getItem('email')
      }
      this.http.post("http://localhost:4000/change-pass",params).subscribe((res:any)=>{
        console.log(res,'kkk');
        if(res.status == "Success"){
          this.snackabr.openSnackBarErr(res.message , 'green-snackbar')
          // this.password.setValue['']
        }else{
          this.snackabr.openSnackBarErr(res.message , 'red-snackbar')
        }
      })
    }else{
      this.password.markAllAsTouched()
    }
  }
}

