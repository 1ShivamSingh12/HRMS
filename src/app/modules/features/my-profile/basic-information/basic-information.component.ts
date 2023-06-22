import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { myProfileAnimation } from 'src/app/animations/myProfileAnimation';
import { genderData, martialData } from 'src/app/constants/drop_down_data';
import {
  COMMON_VALIDATION,
  CONTACT_MAX_LENGTH,
  CONTACT_NUMBER,
  REGEX,
  NAME_PATTERN,
  USERNAME_MAX_LENGTH,
} from 'src/app/constants/Validations';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
  animations: [myProfileAnimation],
})
export class BasicInformationComponent implements OnInit {
  basicInfo!: FormGroup;
  minFromDate = new Date();
  genderdropDown: any;
  martialdropDown: any;
  basicInfoData: any;
  constructor(
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private http: HttpClient,

  ) {}

  selected = 'option1';

  ngOnInit(): void {
    this.createForm();
    this.genderdropDown = genderData;
    this.martialdropDown = martialData;
    this.api();
  }

  createForm() {
    this.basicInfo = this.fb.group({
      firstname: ['', [COMMON_VALIDATION, NAME_PATTERN, USERNAME_MAX_LENGTH]],
      lastname: ['', [COMMON_VALIDATION, NAME_PATTERN, USERNAME_MAX_LENGTH]],
      dateOfBirth: ['', [COMMON_VALIDATION]],
      gender: ['', [COMMON_VALIDATION]],
      martialStatus: ['', [COMMON_VALIDATION]],
      contactNumber: ['', [COMMON_VALIDATION, CONTACT_NUMBER, CONTACT_MAX_LENGTH]],
      experiencedYears: ['', [COMMON_VALIDATION]],
      experiencedMonths: ['', [COMMON_VALIDATION]],
      relaventExperiencedYears: ['', [COMMON_VALIDATION]],
      relaventExperiencedMonths: ['', [COMMON_VALIDATION]],
    });
  }

  date:any

  api() {

    this.http.post('http://localhost:4000/my-profile',{'email':localStorage.getItem('email')}).subscribe((res: any) => {
      console.log();

      this.basicInfoData = res[0];
      // this.basicInfoData.dateOfBirthv = this.datepipe.transform(this.basicInfoData.dateOfBirth, 'yyyy-MM-dd');

      this.basicInfo.patchValue(this?.basicInfoData);
      this.basicInfo.patchValue(this.basicInfoData?.companyDuration);
      // this.basicInfo.controls['dateOfBirth'].patchValue(this.datepipe.transform(this.basicInfoData.dateOfBirth, 'yyyy-MM-dd'))

      // console.log('hyy',this.basicInfo)

    });
  }

  onSubmit() {

    let option = {
      id:this.basicInfoData._id,
      id2:this.basicInfoData.companyDuration._id,
      data:this.basicInfo.value
    }

    if (this.basicInfo.valid) {
      this.http.patch('http://localhost:4000/my-profile-update',option).subscribe((res: any) => {
        console.log(res,'wdkf');
      });
    } else {
      this.basicInfo.markAllAsTouched();
    }
  }

  noSpace(event: any) {
    if (event.target.selectionStart == 0 && event.code == 'Space') {
      event.preventDefault();
      this.snackbar.openSnackBarErr(
        'Should not start with space',
        'red-snackbar'
      );
    }
  }
}
