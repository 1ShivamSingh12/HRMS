import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FLOATING_LEAVE } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-floating-leave',
  templateUrl: './floating-leave.component.html',
  styleUrls: ['./floating-leave.component.scss']
})
export class FloatingLeaveComponent implements OnInit {
  dataSource = new MatTableDataSource<FLOATING_LEAVE>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<FLOATING_LEAVE>(this.tableData);

  }

  tableColumns: Array<any> = [
    {
      columnDef: 's_no',
      header: 'S_No.',
      cell: (element: Record<string, any>) => `${element['s_no']}`,
    },
    {
      columnDef: 'event_name',
      header: 'Event Type',
      cell: (element: Record<string, any>) => `${element['event_name']}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: Record<string, any>) => `${element['date']}`,
    },
  ];

  tableData: Array<FLOATING_LEAVE> = [
    {
      s_no: 1,
      event_name: 'Gurupurab',
      date: '27th Nov, 2023',

    },
    {
      s_no: 2,
      event_name: 'Janmashtami',
      date: '7th Sep, 2023',

    },
  ];


}
