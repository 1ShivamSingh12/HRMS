import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { myProfileAnimation } from 'src/app/animations/myProfileAnimation';
import { COMMON_VALIDATION, NAME_PATTERN } from 'src/app/constants/Validations';
import { QUALIFICATION, Options } from 'src/app/interfaces/table.interface';
import { DeleteQualificationComponent } from './delete-qualification/delete-qualification.component';
import { EditQualificationComponent } from './edit-qualification/edit-qualification.component';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
  animations: [myProfileAnimation],
})
export class QualificationComponent implements OnInit {
  qualification!: FormGroup;
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.qualification = this.fb.group({
      school: ['', [COMMON_VALIDATION]],
      education_level: ['', [COMMON_VALIDATION, NAME_PATTERN]],
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
      isButton: true,
      buttons: [
        {
          heading: 'Edit',
          style: 'edit',
          data: (element: QUALIFICATION) => element,
          action: 'edit',
        },
        {
          heading: 'Delete',
          style: 'delete',
          data: (element: QUALIFICATION) => element,
          action: 'delete',
        },

      ],
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

  tableData: any = [
    {
      action: '',
      school: 'sjknjwe',
      time_period: 'ewfwefui',
      education_level: 'ekwfefuei32ih32',
    },
    {
      action: '',
      school: 'jhbhh',
      time_period: 'vvvvvvv',
      education_level: 'nnnnnnn',
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

  buttonClick(result: string[]) {
    console.log(result, 'dddddddddddd');

    if (result[0] == 'edit') {
      this.dialog.open(EditQualificationComponent, {
        width: '46rem',
        panelClass: 'app-full-bleed-dialog',
        data: result[1],
      });
    }else if(result[0] == 'delete'){
      this.dialog.open(DeleteQualificationComponent,{
        width:'26rem',
        data : result[1]
      })
    }
  }

  TABLE_DATA:any[]=[];

  saveData(){
    this.TABLE_DATA.push(this.qualification.value);

    this.tableData = new MatTableDataSource<QUALIFICATION>(this.TABLE_DATA);
  }
}
