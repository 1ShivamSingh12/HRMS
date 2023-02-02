import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { COMMON_VALIDATION, NAME_PATTERN, PASSWORD_MIN_LENGTH, USERNAME_MAX_LENGTH } from 'src/app/Constant/Validations';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login-with-credentials',
  templateUrl: './login-with-credentials.component.html',
  styleUrls: ['./login-with-credentials.component.scss']
})
export class LoginWithCredentialsComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb : FormBuilder , private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [COMMON_VALIDATION, NAME_PATTERN , USERNAME_MAX_LENGTH]],
      password: ['', [COMMON_VALIDATION, PASSWORD_MIN_LENGTH]],
    });
  }


  public showError(): void {
    this.toastrService.error('Message Error!', 'Title Error!');
  }

  onSubmit(){
    console.log('lklmnjjkb');
    this.showError()
    if(this.loginForm.valid){
    }
  }
}
