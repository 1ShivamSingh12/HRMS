import { Component, OnInit } from '@angular/core';
import { MANUAL_PUNCH } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-manual-punch',
  templateUrl: './manual-punch.component.html',
  styleUrls: ['./manual-punch.component.scss']
})
export class ManualPunchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tableColumns: Array<any> = [
    {
      columnDef: 'edit',
      header: 'Edit',
      cell: (element: Record<string, any>) => `${element['edit']}`,
    },
    {
      columnDef: 'manual_punch_date',
      header: 'Manual Punch Date',
      cell: (element: Record<string, any>) => `${element['manual_punch_date']}`,
    },
    {
      columnDef: 'in_time',
      header: 'In Time',
      cell: (element: Record<string, any>) => `${element['in_time']}`,
    },
    {
      columnDef: 'out_time',
      header: 'Out Time',
      cell: (element: Record<string, any>) => `${element['out_time']}`,
    },
  ];

  tableData: Array<MANUAL_PUNCH> = [
    {
      edit:'',
      manual_punch_date:'',
      in_time:'',
      out_time:'',
    },
  ];

}
