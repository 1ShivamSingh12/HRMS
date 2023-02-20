import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { COMMON_VALIDATION, EMAIL_VALIDATION, MIN_LENGTH } from 'src/app/constants/Validations';
import { ToastrService } from 'ngx-toastr';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { Router } from '@angular/router';
import { HOME } from 'src/app/constants/routes';
@Component({
  selector: 'app-login-with-credentials',
  templateUrl: './login-with-credentials.component.html',
  styleUrls: ['./login-with-credentials.component.scss']
})
export class LoginWithCredentialsComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb : FormBuilder ,private snackbar_service : SnackbarService ,private route : Router ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [COMMON_VALIDATION , EMAIL_VALIDATION]],
      password: ['', [COMMON_VALIDATION, MIN_LENGTH]],
    });
  }


  onSubmit(){

    if(this.loginForm.valid){

      if(this.loginForm.value.email == 'shivam12@gmail.com' && this.loginForm.value.password == '123456'){
        sessionStorage.setItem('login','True')
        this.route.navigate(['dashboard/home'])
      }else{
        this.snackbar_service.openSnackBarErr('Login Credentials are invalid','red-snackbar')
      }

    }else{

      this.loginForm.markAllAsTouched()
      if(this.loginForm.value.email == ''){
        this.snackbar_service.openSnackBarErr('Email field is Empty' , 'red-snackbar')
      }else{
        this.snackbar_service.openSnackBarErr('Password field is Empty' , 'red-snackbar')
      }
    }
  }
}
