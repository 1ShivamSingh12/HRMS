import { Component, OnInit } from '@angular/core';
import { ATTENDENCE } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss']
})
export class AttendenceComponent implements OnInit {

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
