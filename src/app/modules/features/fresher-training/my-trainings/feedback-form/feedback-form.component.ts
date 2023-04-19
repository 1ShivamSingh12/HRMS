import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { COMMON_VALIDATION } from 'src/app/constants/Validations';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  constructor(private fb : FormBuilder , private snackbar : SnackbarService) { }
  feedback! : FormGroup

  ngOnInit(): void {
    this.createForm()
  }
  seasons: string[] = ['Yes', 'No',];

  createForm() {
    this.feedback = this.fb.group({
      objective: ['', [COMMON_VALIDATION]],
      helpul: ['', [COMMON_VALIDATION]],
      rate: ['', [COMMON_VALIDATION]],
      satisfy: ['', [COMMON_VALIDATION]],
      feedback: ['', [COMMON_VALIDATION]],
    });
  }

  submitFeedback(){
    if(this.feedback.valid){
    }else{
      this.snackbar.openSnackBarErr('Fields are required','red-snackbar')
      // this.feedback.markAllAsTouched()
    }
  }
  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
      this.snackbar.openSnackBarErr('Should not start with space' , 'red-snackbar')
    }
  }

}
