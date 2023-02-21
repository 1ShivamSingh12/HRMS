import { Component, OnInit } from '@angular/core';
import { Options, TRAININGS_DETAILS } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-trainings-details',
  templateUrl: './trainings-details.component.html',
  styleUrls: ['./trainings-details.component.scss']
})
export class TrainingsDetailsComponent implements OnInit {

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

  tableData: Array<TRAININGS_DETAILS> = [
    {
      serial_number: '',
      topic: '',
      topic_trainer: '',
      trainer_email: '',
      start_date: '',
      end_date: '',
      resource_url: '',
    },
  ];

  TRAININGS_DETAILS: Options = {
    search: false,
    show:false,
    searchPlaceholder: "Search...",
    pagination: true,
    addButton: false,
};

training_detailsConfig: Options = this.TRAININGS_DETAILS;

}
