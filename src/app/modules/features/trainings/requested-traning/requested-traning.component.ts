import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  Options,
  REQUESTED_TRANING_DECLARATION,
} from 'src/app/constants/tableConfig';
import { REQUESTED_TRAINING } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-requested-traning',
  templateUrl: './requested-traning.component.html',
  styleUrls: ['./requested-traning.component.scss'],
})
export class RequestedTraningComponent implements OnInit {
  requestedTraningConfig: Options = REQUESTED_TRANING_DECLARATION;
  dataSource = new MatTableDataSource<REQUESTED_TRAINING>();

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<REQUESTED_TRAINING>(
      this.tableData
    );
  }

  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: 'S No.',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'training_name',
      header: 'Traning Name',
      cell: (element: Record<string, any>) => `${element['training_name']}`,
    },
    {
      columnDef: 'timeline_to_conduct',
      header: 'Timeline to conduct',
      cell: (element: Record<string, any>) =>
        `${element['timeline_to_conduct']}`,
    },
    {
      columnDef: 'requested_date',
      header: 'Requested Date',
      cell: (element: Record<string, any>) => `${element['requested_date']}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: Record<string, any>) => `${element['status']}`,
    },
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
    },
  ];

  tableData: Array<REQUESTED_TRAINING> = [
    // {
    //   serial_number: '',
    //   training_name: '',
    //   timeline_to_conduct: '',
    //   requested_date: '',
    //   status: '',
    //   action: '',
    // },
  ];
}
