import { Component, OnInit } from '@angular/core';
import { Options, QUALIFICATION } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
      time_period:'',
      education_level: '',

    },
  ];

  QUALIFICATION_DECLARATION: Options = {
    search: true,
    show:true,
    searchPlaceholder: "",
    pagination: true,
    addButton: false,
};

qualificationConfig: Options = this.QUALIFICATION_DECLARATION;

}
