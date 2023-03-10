import { Component, OnInit } from '@angular/core';
import { Options, REQUESTED_TRAINING } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-requested-traning',
  templateUrl: './requested-traning.component.html',
  styleUrls: ['./requested-traning.component.scss']
})
export class RequestedTraningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
      cell: (element: Record<string, any>) => `${element['timeline_to_conduct']}`,
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
    {
      serial_number: '',
      training_name: '',
      timeline_to_conduct: '',
      requested_date: '',
      status : '',
      action: '',
    },
  ];

  REQUESTED_TRANING_DECLARATION: Options = {
    search: false,
    show:true,
    searchPlaceholder: "Search..",
    pagination: true,
    addButton: false,
};

requestedTraningConfig: Options = this.REQUESTED_TRANING_DECLARATION;

}
