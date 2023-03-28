
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { myProfileAnimation } from 'src/app/animations/myProfileAnimation';
import { degreeList } from 'src/app/constants/const_data';
import { commondropDown } from 'src/app/constants/drop_down_data';
import {
  Options,
  QUALIFICATION_DECLARATION_CONFIG,
} from 'src/app/constants/tableConfig';
import { COMMON_VALIDATION } from 'src/app/constants/Validations';
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
  dropdown: any;
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.createForm();
    this.dataSource = new MatTableDataSource<QUALIFICATION>(this.tableData);
    this.dropdown = commondropDown;
  }

  // data : any = degreeList
  createForm() {
    this.qualification = this.fb.group({
      school: ['', [COMMON_VALIDATION]],
      eductaion_level: ['', [COMMON_VALIDATION]],
      date_from: ['', [COMMON_VALIDATION]],
      date_to: ['', [COMMON_VALIDATION]],
      language: ['', [COMMON_VALIDATION]],
      Courses: ['', [COMMON_VALIDATION]],
      description:['',[COMMON_VALIDATION]]
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
      cell: (element: Record<string, any>) =>
        `${element['date_from']} - ${element['date_to']}`,
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
      let dialog = this.dialog.open(EditQualificationComponent, {
        width: '46rem',
        panelClass: 'app-full-bleed-dialog',
        data: result[1],
      }).afterClosed().subscribe((res: any) => {
        console.log(res, 'weheufguwe');
        for (let i = 0; i < this.tableData.length; i++) {

          if (this.tableData[i]?.id == res?.id) {

            this.tableData[i] = res;
            console.log(this.tableData, 'afterupdate');

            this.dataSource = new MatTableDataSource<QUALIFICATION>(
              this.tableData
            );
          }
        }
        dialog.unsubscribe()
      });

    } else if (result[0] == 'delete') {
      let dialog=this.dialog.open(DeleteQualificationComponent, {
        width: '26rem',
        data: result[1],
      }).afterClosed().subscribe((res: any) => {
        console.log(res, 'vyvyyu6y');
        if (res == true) {
          let temp = result[1];
          this.tableData = this.tableData.filter(
            (item: any) => item.id != temp.id
          );
          this.dataSource = new MatTableDataSource<QUALIFICATION>(
            this.tableData
          );
        }
        dialog.unsubscribe()
      });
    }
  }

  saveData() {
    if (this.qualification.valid) {
      this.tableData.push(this.qualification.value);
    } else {
      this.qualification.markAllAsTouched();
    }
    this.dataSource = new MatTableDataSource<QUALIFICATION>(this.tableData);
  }
}
