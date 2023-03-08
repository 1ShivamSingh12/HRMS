import { Component, OnInit } from '@angular/core';
import { PUNCH_LOG } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-punch-log',
  templateUrl: './punch-log.component.html',
  styleUrls: ['./punch-log.component.scss']
})
export class PunchLogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tableColumns: Array<any> = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
    },
    {
      columnDef: 'punch_time',
      header: 'Punch Time',
      cell: (element: Record<string, any>) => `${element['punch_time']}`,
    },
    {
      columnDef: 'direction',
      header: 'Direction',
      cell: (element: Record<string, any>) => `${element['direction']}`,
    },

  ];

  tableData: Array<PUNCH_LOG> = [
    {
      name:'',
      punch_time:'',
      direction:'',
    },
  ];


}
