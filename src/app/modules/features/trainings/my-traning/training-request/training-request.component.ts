import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { COMMON_VALIDATION } from 'src/app/constants/Validations';
import { commondropDown } from 'src/app/constants/drop_down_data';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-training-request',
  templateUrl: './training-request.component.html',
  styleUrls: ['./training-request.component.scss']
})
export class TrainingRequestComponent implements OnInit {

  constructor(private fb: FormBuilder , private snackbar : SnackbarService ) { }

  ngOnInit(): void {
    this.createForm()
  }

  requestTrainingForm! : FormGroup
  dropDown = commondropDown

  createForm(){
    this.requestTrainingForm = this.fb.group({
      training : ['',[COMMON_VALIDATION]],
      team : ['',[COMMON_VALIDATION]],
      skills_area : ['',[COMMON_VALIDATION]],
      need : ['',[COMMON_VALIDATION]],
      interested : ['',[COMMON_VALIDATION]],
      time_period : ['',[COMMON_VALIDATION]],

    })
  }

  requestSubmit(){
    if(this.requestTrainingForm.valid){
      if(this.requestTrainingForm.value.skills_area.trim() == ''){
        console.log('fvk');

      }

    }else{
      this.requestTrainingForm.markAllAsTouched()
    }
  }

  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
      this.snackbar.openSnackBarErr('Should not start with space' , 'red-snackbar')
    }

  }


}
