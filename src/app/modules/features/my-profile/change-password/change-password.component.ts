import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { myProfileAnimation } from 'src/app/animations/myProfileAnimation';
import { COMMON_VALIDATION, MIN_LENGTH } from 'src/app/constants/Validations';

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
  constructor(private fb:FormBuilder) { }

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
}
