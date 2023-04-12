import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DSR_TABLEDATA } from 'src/app/constants/const_data';
import { DSR_EDIT } from 'src/app/constants/routes';
import { DSR_DETAIL_CONFIG } from 'src/app/constants/tableConfig';
import { DSR_DETAIL } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-my-dsr-detail',
  templateUrl: './my-dsr-detail.component.html',
  styleUrls: ['./my-dsr-detail.component.scss'],
})
export class MyDsrDetailComponent implements OnInit {
  value: any;
  query_param: any;
  dsrDetailConfig = DSR_DETAIL_CONFIG;
  dataSource = new MatTableDataSource<DSR_DETAIL>();
  tableData = <any>[];

  constructor(private route: ActivatedRoute , private Route : Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.query_param = res.id;
      console.log(res.id);
      this.value = DSR_TABLEDATA.filter((item) => item.date == res.id);
      console.log(this.value);
      this.tableData = this.value[0].DSR;
      this.dataSource = new MatTableDataSource<DSR_DETAIL>(this.tableData);
    });
  }

  tableColumns: Array<any> = [
    {
      columnDef: 'sr_no',
      header: 'Sr.No.',
      cell: (element: Record<string, any>) => `${element['sr_no']}`,
    },
    {
      columnDef: 'project_name',
      header: 'Project Name',
      cell: (element: Record<string, any>) => `${element['project_name']}`,
    },
    {
      columnDef: 'dsr',
      header: 'Dsr',
      cell: (element: Record<string, any>) => `${element['dsr']}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: Record<string, any>) => `${element['status']}`,
    },
    {
      columnDef: 'pm_approval',
      header: 'PM Approval',
      cell: (element: Record<string, any>) => `${element['pm_approval']}`,
    },
    {
      columnDef: 'am_approval',
      header: 'AM Approval',
      cell: (element: Record<string, any>) => `${element['am_approval']}`,
    },
    {
      columnDef: 'rm_approval',
      header: 'RM Approval',
      cell: (element: Record<string, any>) => `${element['rm_approval']}`,
    },
    {
      columnDef: 'final_approval',
      header: 'Fianl Approval',
      cell: (element: Record<string, any>) => `${element['final_approval']}`,
    },
    {
      columnDef: 'logged_hrs',
      header: 'Logged hrs',
      cell: (element: Record<string, any>) => `${element['logged_hrs']}`,
    },
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
      type:'button',
      buttons:[
        {
          icon:'edit',
          style: 'dsr_edit',
          data:(element:DSR_DETAIL) => element,
        }
      ]
    },
  ];

  buttonClick(result:any){
    console.log(result,'ll');

    this.Route.navigate([DSR_EDIT.fullurl ,  this.query_param])

  }
}
