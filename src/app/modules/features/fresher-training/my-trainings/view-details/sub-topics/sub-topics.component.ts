import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SUB_TOPICS } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-sub-topics',
  templateUrl: './sub-topics.component.html',
  styleUrls: ['./sub-topics.component.scss']
})
export class SubTopicsComponent implements OnInit {
  dataSource = new MatTableDataSource<SUB_TOPICS>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<SUB_TOPICS>(this.tableData);

  }

  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: 'S.No',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'sub_topic',
      header: 'Sub-Topic',
      cell: (element: Record<string, any>) => `${element['topic']}`,
    },
    {
      columnDef: 'topic',
      header: 'Topic',
      cell: (element: Record<string, any>) => `${element['topic']}`,
    },
    {
      columnDef: 'trainer',
      header: 'Trainer',
      cell: (element: Record<string, any>) => `${element['trainer']}`,
    },
    {
      columnDef: 'trainer_email',
      header: 'Trainer Email',
      cell: (element: Record<string, any>) => `${element['trainer_email']}`,
    },
    {
      columnDef: 'start_date',
      header: 'Start Date',
      cell: (element: Record<string, any>) => `${element['start_date']}`,
    },
    {
      columnDef: 'end_date',
      header: 'End Date',
      cell: (element: Record<string, any>) => `${element['end_date']}`,
    },
    {
      columnDef: 'resource_url',
      header: 'Resource Url',
      cell: (element: Record<string, any>) => `${element['resource_url']}`,
    },
  ];

  tableData: Array<SUB_TOPICS> = [
    {
      serial_number: '',
      sub_topic : '',
      topic: '',
      trainer: '',
      trainer_email: '',
      start_date: '',
      end_date: '',
      resource_url: '',
    },
  ];



}
