import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { COMMON_VALIDATION, CONTACT_MAX_LENGTH, CONTACT_NUMBER, EMAIL_VALIDATION, NAME_PATTERN, USERNAME_MAX_LENGTH } from 'src/app/constants/Validations';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-refer-candidate-dialog',
  templateUrl: './refer-candidate-dialog.component.html',
  styleUrls: ['./refer-candidate-dialog.component.scss']
})
export class ReferCandidateDialogComponent implements OnInit {

  referCandidate! : FormGroup

  constructor(private fb : FormBuilder , private dialogRef: MatDialogRef<ReferCandidateDialogComponent> , private snackbar  :SnackbarService) {
    this.dialogRef.disableClose = true
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.referCandidate = this.fb.group({
      job_location: ['', [COMMON_VALIDATION , NAME_PATTERN]],
      candidate_name: ['', [COMMON_VALIDATION , NAME_PATTERN , USERNAME_MAX_LENGTH]],
      position: ['', [COMMON_VALIDATION , NAME_PATTERN]],
      experience: ['', [COMMON_VALIDATION]],
      email: ['', [COMMON_VALIDATION , EMAIL_VALIDATION]],
      number: ['', [COMMON_VALIDATION , CONTACT_MAX_LENGTH , CONTACT_NUMBER]],
      file: ['', [COMMON_VALIDATION]],
    });
  }

  onSubmit(){
    if(this.referCandidate.valid){
      console.log(this.referCandidate.value);

    }else{
      this.referCandidate.markAllAsTouched()
    }
  }

  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
      this.snackbar.openSnackBarErr('Should not start with space' , 'red-snackbar')
    }

  }

  imagePath: any;
  imgURL: any;
  size! : number

  preview(files: any) {
    console.log(files.target.files,'lll');

    this.size = files.target.files[0].size
    let type = files.target.files[0].type
    if(this.size <= 1000000 && (type == 'image/jpeg' || type == 'image/png' || type == 'image/gif')){

      // if (files.length === 0) return;
      // var reader = new FileReader();
      // this.imagePath = files;
      // reader.readAsDataURL(files[0]);

      // reader.onload = (_event) => {
      //   // let x = reader.result?.toString();
      //   // let rawData = x?.split(',')?.pop();
      //   // console.log(rawData,'skwe');
      //   this.imgURL = reader.result
      // };
    }else if(this.size >= 1000000){
      this.snackbar.openSnackBarErr('File limit is 1Mb','red-snackbar')
    }else{
      this.snackbar.openSnackBarErr('File Type should be png , jpg , jpeg , gif' , 'red-snackbar')
    }
  }
}
