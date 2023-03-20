import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { myProfileAnimation } from 'src/app/animations/myProfileAnimation';
import { degreeList } from 'src/app/constants/const_data';
import { Options,QUALIFICATION_DECLARATION_CONFIG } from 'src/app/constants/tableConfig';
import { COMMON_VALIDATION, NAME_PATTERN } from 'src/app/constants/Validations';
import { QUALIFICATION } from 'src/app/interfaces/table.interface';
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
  qualificationConfig: Options = QUALIFICATION_DECLARATION_CONFIG;
  dataSource = new MatTableDataSource<QUALIFICATION>();

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.createForm();
    this.saveData()
  }

  // data : any = degreeList
  createForm() {
    this.qualification = this.fb.group({
      school: ['', [COMMON_VALIDATION]],
      education_level: ['', [COMMON_VALIDATION, NAME_PATTERN]],
      date_from: ['', [COMMON_VALIDATION]],
      date_to: ['', [COMMON_VALIDATION]],
      language: ['', [COMMON_VALIDATION]],
      Courses: ['', [COMMON_VALIDATION]],
    });
  }
  tableColumns: Array<any> = [
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
      type: 'button',
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
      cell: (element: Record<string, any>) => `${element['date_from']} - ${element['date_to']}`,
    },
    {
      columnDef: 'education_level',
      header: 'Education Level',
      cell: (element: Record<string, any>) => `${element['education_level']}`,
    },
  ];

  tableData: any = degreeList;


  buttonClick(result: any) {
    console.log(result, 'dddddddddddd');

    if (result[0] == 'edit') {
      this.dialog.open(EditQualificationComponent, {
        width: '46rem',
        panelClass: 'app-full-bleed-dialog',
        data: result[1],
      });
    } else if (result[0] == 'delete') {
      this.dialog.open(DeleteQualificationComponent, {
        width: '26rem',
        data: result[1],
      }).afterClosed().subscribe((res:any)=>{
        console.log(res,"alto");
        if(res == true){
          console.log(result,"123");
          let temp = result[1];
          this.tableData = this.tableData.filter((item:any)=> item.id!= temp.id)
          this.dataSource = new MatTableDataSource<QUALIFICATION>(this.tableData);

        }


      });
    }
  }

  saveData() {
    if (this.qualification.valid) {
      this.tableData.push(this.qualification.value);
    }
    this.dataSource = new MatTableDataSource<QUALIFICATION>(this.tableData);
  }
}
