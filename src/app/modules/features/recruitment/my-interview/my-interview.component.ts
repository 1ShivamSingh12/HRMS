import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { INTERVIEW_DATA } from 'src/app/constants/const_data';
import { departmentDrop, statusDropDown } from 'src/app/constants/drop_down_data';
import { MY_INTERVIEW_CONFIQ, Options } from 'src/app/constants/tableConfig';
import { MY_INTERVIEW } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-my-interview',
  templateUrl: './my-interview.component.html',
  styleUrls: ['./my-interview.component.scss'],
})
export class MyInterviewComponent implements OnInit {
  interviewConfig: Options = MY_INTERVIEW_CONFIQ;
  dataSource = new MatTableDataSource<MY_INTERVIEW>();
  department = new FormControl();
  status = new FormControl();
  departmentDropDown = departmentDrop
  statusDropDown = statusDropDown
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<MY_INTERVIEW>(this.tableData);
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

  tableData: Array<any> = INTERVIEW_DATA;

  filter: any = INTERVIEW_DATA;

  filterValue(e: any) {
    console.log(e.value,'dkjcnwe');

    if (this.department.value && !this.status.value) {
      this.filter = this.tableData.filter(
        (item: any) => item.department == this.department.value
      );
    } else if (!this.department.value && this.status.value) {
      this.filter = this.tableData.filter(
        (item: any) => item.final_status == this.status.value
      );
    }
    if (this.department.value && this.status.value) {
      this.filter = this.tableData.filter((item) => {
        if (item.department.toLowerCase().includes(this.department.value.toLowerCase()) &&item.final_status.toLowerCase().includes(this.status.value.trim().toLowerCase())){
          return true;
        }
        return false;
      });
    }
    this.dataSource = new MatTableDataSource<MY_INTERVIEW>(this.filter);
  }
}
