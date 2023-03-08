import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { COMMON_VALIDATION, NAME_PATTERN } from 'src/app/constants/Validations';

@Component({
  selector: 'app-edit-qualification',
  templateUrl: './edit-qualification.component.html',
  styleUrls: ['./edit-qualification.component.scss']
})
export class EditQualificationComponent implements OnInit {

  qualification!: FormGroup;
  constructor(private fb: FormBuilder , private dialog:MatDialog , @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.createForm();
    console.log(this.data,'wkewjfebfuefuieuifwe');
  }

  createForm() {
    this.qualification = this.fb.group({
      school: ['', [COMMON_VALIDATION]],
      eductaion_level: ['', [COMMON_VALIDATION, NAME_PATTERN]],
      time: ['', [COMMON_VALIDATION]],
      time_to: ['', [COMMON_VALIDATION]],
      language: ['', [COMMON_VALIDATION]],
      Courses: ['', [COMMON_VALIDATION]],
    });
  }
}
