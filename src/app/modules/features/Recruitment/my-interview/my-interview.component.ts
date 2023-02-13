import { Component, OnInit } from '@angular/core';
import { MY_INTERVIEW, Options } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-my-interview',
  templateUrl: './my-interview.component.html',
  styleUrls: ['./my-interview.component.scss']
})
export class MyInterviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: 'S.No',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'department',
      header: 'Department',
      cell: (element: Record<string, any>) => `${element['department']}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: Record<string, any>) => `${element['email']}`,
    },
    {
      columnDef: 'mobileNo',
      header: 'Mobile No.',
      cell: (element: Record<string, any>) => `${element['mobileNo']}`,
    },
    {
      columnDef: 'round_type',
      header: 'Round Type',
      cell: (element: Record<string, any>) => `${element['round_type']}`,
    },
    {
      columnDef: 'interview_date',
      header: 'Interview Date',
      cell: (element: Record<string, any>) => `${element['interview_date']}`,
    },
    {
      columnDef: 'interview_time',
      header: 'Interview Time',
      cell: (element: Record<string, any>) => `${element['interview_time']}`,
    },
    {
      columnDef: 'final_status',
      header: 'Final Status',
      cell: (element: Record<string, any>) => `${element['final_status']}`,
    },
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
    },
  ];

  tableData: Array<MY_INTERVIEW> = [
    {
      serial_number: '',
      department: '',
      name: '',
      email: '',
      mobileNo: '',
      round_type: '',
      interview_date: '',
      interview_time : '',
      final_status:'',
      action:''
    },
  ];

  MY_INTERVIEW: Options = {
    search: true,
    show:true,
    searchPlaceholder: "Search...",
    pagination: true,
    addButton: false,
};

interviewConfig: Options = this.MY_INTERVIEW;


}
