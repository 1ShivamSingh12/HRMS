import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ATTENDENCE } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss']
})
export class AttendenceComponent implements OnInit {
  dataSource = new MatTableDataSource<ATTENDENCE>()
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ATTENDENCE>(this.tableData)
  }
  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: 'S.No',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'topic',
      header: 'Topic',
      cell: (element: Record<string, any>) => `${element['topic']}`,
    },

    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: Record<string, any>) => `${element['date']}`,
    },
    {
      columnDef: 'attendence',
      header: 'Attendence',
      cell: (element: Record<string, any>) => `${element['attendence']}`,
    },
  ];

  tableData: Array<ATTENDENCE> = [
    {
      serial_number: '',
      topic: '',
      date: '',
      attendence: '',
    },
  ];

}
