import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { COMMON_VALIDATION, EMAIL_VALIDATION, MIN_LENGTH, PASSWORD_VALIDATION } from 'src/app/constants/Validations';
import { ToastrService } from 'ngx-toastr';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { Router } from '@angular/router';
import { DASHBOARD, HOME } from 'src/app/constants/routes';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login-with-credentials',
  templateUrl: './login-with-credentials.component.html',
  styleUrls: ['./login-with-credentials.component.scss']
})
export class LoginWithCredentialsComponent implements OnInit {

  loginForm!: FormGroup;

  hide = true

  constructor(private fb : FormBuilder ,private snackbar_service : SnackbarService ,private route : Router, private http : HttpClient ) { }

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

      let option = {
        email:this.loginForm.value.email,
        password : this.loginForm.value.password
      }

      this.http.post('http://localhost:4000/login',option).subscribe((res:any)=>{
        console.log(res,'khedfiewh');

        if(res.status == 'success'){
          this.snackbar_service.openSnackBarErr(res.message,'green-snackbar')
          this.route.navigate([HOME.fullurl])
          localStorage.setItem('email',this.loginForm.value.email)
        }else{
          this.snackbar_service.openSnackBarErr(res.message,'red-snackbar')
        }
      })


    }else{

      this.loginForm.markAllAsTouched()
      if(this.loginForm.value.email == ''){
        this.snackbar_service.openSnackBarErr('Email field is Empty' , 'red-snackbar')
      }else{
        this.snackbar_service.openSnackBarErr('Password field is Empty' , 'red-snackbar')
      }
    }
  }
  passwordPressed:boolean = false;


  get passwordPressedGet():boolean{
    return this.passwordPressed;
  }

  passwordInput(){
    this.passwordPressed = false

    setTimeout(()=>{
      this.passwordPressed = true
    },700)
  }

}
