import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { COMMON_VALIDATION, EMAIL_VALIDATION, NAME_PATTERN, PASSWORD_MIN_LENGTH, USERNAME_MAX_LENGTH } from 'src/app/constants/Validations';
import { ToastrService } from 'ngx-toastr';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
@Component({
  selector: 'app-login-with-credentials',
  templateUrl: './login-with-credentials.component.html',
  styleUrls: ['./login-with-credentials.component.scss']
})
export class LoginWithCredentialsComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb : FormBuilder ,private snackbar_service : SnackbarService ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [COMMON_VALIDATION , EMAIL_VALIDATION]],
      password: ['', [COMMON_VALIDATION, PASSWORD_MIN_LENGTH]],
    });
  }


  onSubmit(){
    if(this.loginForm.value.email == ''){
      this.snackbar_service.openSnackBarErr('Email field is Empty' , 'red-snackbar')
    }else if(this.loginForm.value.password == ''){
      this.snackbar_service.openSnackBarErr('Password field is Empty' , 'red-snackbar')
    }
  }
}
