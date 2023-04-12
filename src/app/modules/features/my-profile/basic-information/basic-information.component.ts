import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { myProfileAnimation } from 'src/app/animations/myProfileAnimation';
import { genderData, martialData } from 'src/app/constants/drop_down_data';
import { COMMON_VALIDATION, CONTACT_MAX_LENGTH, CONTACT_NUMBER, SPACES } from 'src/app/constants/Validations';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
  animations: [
    myProfileAnimation
  ],
})
export class BasicInformationComponent implements OnInit {

  basicInfo!: FormGroup;
  minFromDate= new Date();
  genderdropDown : any
  martialdropDown:any
  constructor(private fb: FormBuilder) {}

  selected = 'option1';

  ngOnInit(): void {
    this.createForm();
    this.genderdropDown = genderData
    this.martialdropDown = martialData

  }

  createForm() {
    this.basicInfo = this.fb.group({
      first_name: ['', [COMMON_VALIDATION , SPACES]],
      last_name: ['', [COMMON_VALIDATION]],
      date_of_birth: ['', [COMMON_VALIDATION]],
      gender: ['', [COMMON_VALIDATION]],
      martial_status: ['', [COMMON_VALIDATION]],
      number: ['', [COMMON_VALIDATION , CONTACT_NUMBER , CONTACT_MAX_LENGTH]],
      years_experience: ['', [COMMON_VALIDATION]],
      months_experience: ['', [COMMON_VALIDATION]],
      years_relevant: ['', [COMMON_VALIDATION]],
      months_relevant: ['', [COMMON_VALIDATION]],
    });
  }

  onSubmit() {
    console.log('this is basic form>>>>>>>>',this.basicInfo);
    if (this.basicInfo.valid) {
      console.log(this.basicInfo.value.trim());

    } else {
      this.basicInfo.markAllAsTouched();
    }
  }

  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }

}
