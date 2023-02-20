import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { COMMON_VALIDATION, EMAIL_VALIDATION, NAME_PATTERN } from 'src/app/constants/Validations';

@Component({
  selector: 'app-refer-candidate-dialog',
  templateUrl: './refer-candidate-dialog.component.html',
  styleUrls: ['./refer-candidate-dialog.component.scss']
})
export class ReferCandidateDialogComponent implements OnInit {

  referCandidate! : FormGroup

  constructor(private fb : FormBuilder , private dialogRef: MatDialogRef<ReferCandidateDialogComponent>) {
    this.dialogRef.disableClose = true
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.referCandidate = this.fb.group({
      job_location: ['', [COMMON_VALIDATION, NAME_PATTERN]],
      candidate_name: ['', [COMMON_VALIDATION, NAME_PATTERN]],
      position: ['', [COMMON_VALIDATION]],
      experience: ['', [COMMON_VALIDATION]],
      email: ['', [COMMON_VALIDATION , EMAIL_VALIDATION]],
      number: ['', [COMMON_VALIDATION]],
      file: ['', [COMMON_VALIDATION]],
    });
  }

  onSubmit(){
    if(this.referCandidate.valid){

    }else{
      this.referCandidate.markAllAsTouched()
    }
  }

}
