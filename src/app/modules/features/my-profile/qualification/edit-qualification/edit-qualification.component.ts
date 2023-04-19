import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { COMMON_VALIDATION, NAME_PATTERN } from 'src/app/constants/Validations';

@Component({
  selector: 'app-edit-qualification',
  templateUrl: './edit-qualification.component.html',
  styleUrls: ['./edit-qualification.component.scss']
})
export class EditQualificationComponent implements OnInit {

  qualification!: FormGroup;
  constructor(private fb: FormBuilder , @Inject(MAT_DIALOG_DATA) public data: any , private dialogRef:MatDialogRef<EditQualificationComponent> , private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.createForm();
    this.qualification.patchValue(this.dialogData)
    console.log(this.data,'wkewjfebfuefuieuifwe');
  }

  dialogData = this.data

  createForm() {
    this.qualification = this.fb.group({
      school: ['', [COMMON_VALIDATION , NAME_PATTERN]],
      education_level: ['', [COMMON_VALIDATION]],
      date_from: ['', [COMMON_VALIDATION]],
      date_to: ['', [COMMON_VALIDATION]],
      language: ['', [COMMON_VALIDATION]],
      Courses: ['', [COMMON_VALIDATION , NAME_PATTERN]],
    });
  }
  time:any

  updateValue(){
    if(this.qualification.valid){
      this.qualification.value['id']=this.dialogData.id
      this.qualification.value.date_from = this.datePipe.transform(this.qualification.value.date_from, 'YYYY-MM-dd');
      this.qualification.value.date_to = this.datePipe.transform(this.qualification.value.date_to, 'YYYY-MM-dd');
      this.dialogRef.close(this.qualification.value);
    }else{
      this.qualification.markAllAsTouched()
    }
  }
}
