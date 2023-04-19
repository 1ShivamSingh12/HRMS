import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MY_TRAINING_TRAINING_DETAILS } from 'src/app/constants/const_data';
import { TRAININGS_DETAILS } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-trainings-details',
  templateUrl: './trainings-details.component.html',
  styleUrls: ['./trainings-details.component.scss']
})
export class TrainingsDetailsComponent implements OnInit {
  dataSource = new MatTableDataSource<TRAININGS_DETAILS>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<TRAININGS_DETAILS>(this.tableData);

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
      columnDef: 'topic_trainer',
      header: 'Topic Trainer',
      cell: (element: Record<string, any>) => `${element['topic_trainer']}`,
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

  tableData: any = MY_TRAINING_TRAINING_DETAILS

}
