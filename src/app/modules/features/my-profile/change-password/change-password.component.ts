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
  constructor(private fb:FormBuilder , private snackabr : SnackbarService) { }

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
      if(this.password.value.new_pass == this.password.value.confirm_pass){
        console.log('wkfuwe');
      }else{
        this.snackabr.openSnackBarErr('Password and confirm password do not match' , 'red-snackbar')
      }
    }else{
      this.password.markAllAsTouched()
    }
  }
}
