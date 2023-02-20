
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { myProfileAnimation } from 'src/app/animations/myProfileAnimation';
import { COMMON_VALIDATION, NAME_PATTERN } from 'src/app/constants/Validations';
import { Options, QUALIFICATION } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
  animations: [
    myProfileAnimation
  ],
})
export class QualificationComponent implements OnInit {
  qualification!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm()
  }


  date1 = new FormControl
  date2 = new FormControl

  @ViewChild('fromInput', {
    read: MatInput
  }) fromInput!: MatInput;
  @ViewChild('toInput', {
    read: MatInput
  }) toInput!: MatInput;

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
  tableColumns: Array<any> = [
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
    },
    {
      columnDef: 'school',
      header: 'School/University',
      cell: (element: Record<string, any>) => `${element['school']}`,
    },
    {
      columnDef: 'time_period',
      header: 'TIme Period',
      cell: (element: Record<string, any>) => `${element['time_period']}`,
    },
    {
      columnDef: 'education_level',
      header: 'Education Level',
      cell: (element: Record<string, any>) => `${element['education_level']}`,
    },
  ];

  tableData: Array<QUALIFICATION> = [
    {
      action: '',
      school: '',
      time_period: '',
      education_level: '',
    },
  ];

  QUALIFICATION_DECLARATION: Options = {
    search: true,
    show: true,
    searchPlaceholder: '',
    pagination: true,
    addButton: false,
  };

  qualificationConfig: Options = this.QUALIFICATION_DECLARATION;
}
