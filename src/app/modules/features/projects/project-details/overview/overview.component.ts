import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PROJECT_LIST_DATA } from 'src/app/constants/const_data';
import { PROJECT_LIST } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  dataSource = new MatTableDataSource<PROJECT_LIST>();
  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PROJECT_LIST>(this.tableData);

  }
  leftList = [
    {
      letter: 'R',
      Info: 'Roadmap',
    },
    {
      letter: 'P',
      Info: 'Project Plan',
    },
    {
      letter: 'U',
      Info: 'User Stories',
    },
    {
      letter: 'D',
      Info: 'Designs',
    },
  ];

  rightList = [
    {
      letter: 'S',
      Info: 'Scope of Work',
    },
    {
      letter: 'W',
      Info: 'Wireframe',
    },
    {
      letter: 'O',
      Info: 'Other',
    },
    {
      letter: 'P',
      Info: 'Project App Links',
    },
  ];

  tableColumns: Array<any> = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
    },
    {
      columnDef: 'allocated',
      header: 'Allocated As',
      cell: (element: Record<string, any>) => `${element['allocated']}`,
    },
    {
      columnDef: 'department',
      header: 'Department',
      cell: (element: Record<string, any>) =>`${element['department']}`,
    },
    {
      columnDef: 'allocate_hours',
      header: 'Alloc Hrs',
      cell: (element: Record<string, any>) => `${element['allocate_hours']}`,
    },
    {
      columnDef: 'exp',
      header: 'Exp',
      cell: (element: Record<string, any>) =>`${element['exp']}`,
    },
    {
      columnDef: 'relevant_exp',
      header: 'Relevant Exp',
      cell: (element: Record<string, any>) => `${element['relevant_exp']}`,
    },
    {
      columnDef: 'hrs_log',
      header: 'Hrs Log',
      cell: (element: Record<string, any>) => `${element['hrs_log']}`,
    },
  ];

  tableData: any = PROJECT_LIST_DATA
}
