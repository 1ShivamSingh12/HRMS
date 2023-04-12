import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Options } from '@fullcalendar/core/preact';
import { PROJECT_DETAIL } from 'src/app/constants/routes';
import { PROJECTS_CONFIG } from 'src/app/constants/tableConfig';
import { PROJECT } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  
  dataSource = new MatTableDataSource<PROJECT>();

  constructor() {}

  ngOnInit(): void {
  this.dataSource = new MatTableDataSource<PROJECT>(this.tableData);

  }

  tableColumns: Array<any> = [
    {
      columnDef: 'project_name',
      header: 'Project Name',
      cell: (element: Record<string, any>) => `${element['project_name']}`,
      type:'link',
      link : PROJECT_DETAIL.fullurl
    },
    {
      columnDef: 'billing_type',
      header: 'Billing Type',
      cell: (element: Record<string, any>) => `${element['billing_type']}`,
    },
    {
      columnDef: 'resources',
      header: 'Resources',
      cell: (element: Record<string, any>) => {
        return `${element['resources']}`;
      },
    },
    {
      columnDef: 'hrs',
      header: 'Hrs',
      cell: (element: Record<string, any>) => `${element['hrs']}`,
    },
    {
      columnDef: 'total_milestone',
      header: 'Total Milestone',
      cell: (element: Record<string, any>) => `${element['total_milestone']}`,
    },
    {
      columnDef: 'delivered',
      header: 'Delivered',
      cell: (element: Record<string, any>) => `${element['delivered']}`,
    },
    {
      columnDef: 'pending',
      header: 'Pending',
      cell: (element: Record<string, any>) => `${element['pending']}`,
    },
    {
      columnDef: 'complete',
      header: '% Complete',
      cell: (element: Record<string, any>) => `${element['complete']}`,
    },
  ];

  tableData: any = [
    {
      project_name: 'Training Project React Js',
      billing_type: 'any',
      resources: 'string',
      hrs: 'any',
      total_milestone: 'string',
      delivered: 'any',
      pending: 'string',
      complete: 'any',
    },
  ];



}
