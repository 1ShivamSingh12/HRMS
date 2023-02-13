import { Component, OnInit } from '@angular/core';
import { Options, REQUEST_ASSETS } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-request-asset',
  templateUrl: './request-asset.component.html',
  styleUrls: ['./request-asset.component.scss']
})
export class RequestAssetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show : boolean = false

  showNewAsset(){
    if(this.show == false){
      this.show = true
    }else{
      this.show = false
    }
  }

  tableColumns: Array<any> = [
    {
      columnDef: 'serial_no',
      header: 'Serial No.',
      cell: (element: Record<string, any>) => `${element['serial_no']}`,
    },
    {
      columnDef: 'status',
      header: 'Assets Name',
      cell: (element: Record<string, any>) => `${element['status']}`,
    },
    {
      columnDef: 'request_reason',
      header: 'Request Reason',
      cell: (element: Record<string, any>) => `${element['request_reason']}`,
    },
    {
      columnDef: 'priority',
      header: 'Priority',
      cell: (element: Record<string, any>) => `${element['priority']}`,
    },
    {
      columnDef: 'requested_at',
      header: 'Requested At',
      cell: (element: Record<string, any>) => `${element['requested_at']}`,
    },
    {
      columnDef: 'assets_category',
      header: 'Assets Category',
      cell: (element: Record<string, any>) => `${element['assets_category']}`,
    },
    {
      columnDef: 'allocation_type',
      header: 'Allocation Type?',
      cell: (element: Record<string, any>) => `${element['allocation_type']}`,
    },
    {
      columnDef: 'company',
      header: 'Company',
      cell: (element: Record<string, any>) => `${element['company']}`,
    },
  ];

  tableData: Array<REQUEST_ASSETS> = [
    {
      serial_no: '',
      status: '',
      request_reason: '',
      priority: '',
      requested_at: '',
      assets_category: '',
      allocation_type: '',
      company : '',
    },
  ];

  REQUEST_ASSETS: Options = {
    search: true,
    show:true,
    searchPlaceholder: "Search..",
    pagination: true,
    addButton: false,
};

assetsConfig: Options = this.REQUEST_ASSETS;
}
