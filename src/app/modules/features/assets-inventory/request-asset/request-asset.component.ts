import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { commondropDown } from 'src/app/constants/drop_down_data';
import { Options, REQUEST_ASSETS_CONFIG } from 'src/app/constants/tableConfig';
import { COMMON_VALIDATION } from 'src/app/constants/Validations';
import { REQUEST_ASSETS } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-request-asset',
  templateUrl: './request-asset.component.html',
  styleUrls: ['./request-asset.component.scss'],
})
export class RequestAssetComponent implements OnInit {
  dataSource = new MatTableDataSource<REQUEST_ASSETS>();
  minDate = new Date()
  requestAsset!: FormGroup;
  assetsConfig: Options = REQUEST_ASSETS_CONFIG;
  dropDown = commondropDown
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.dataSource = new MatTableDataSource<REQUEST_ASSETS>(this.tableData);
  }

  createForm() {
    this.requestAsset = this.fb.group({
      request_reason: ['', [COMMON_VALIDATION]],
      priority: ['', [COMMON_VALIDATION]],
      requested_at: ['', [COMMON_VALIDATION]],
      assets_category: ['', [COMMON_VALIDATION]],
      allocation_type: ['', [COMMON_VALIDATION]],
      quantity:['',[COMMON_VALIDATION]]
    });
  }

  show: boolean = false;

  showNewAsset() {
    if (this.show == false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  tableColumns: Array<any> = [
    {
      columnDef: 'serial_no',
      header: 'S No.',
      cell: (element: Record<string, any>) => `${element['serial_no']}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: Record<string, any>) => `${element['status']}`,
    },
    {
      columnDef: 'request_reason',
      header: 'Request Reason',
      cell: (element: Record<string, any>) => {
        return `${element['request_reason']}`;
      },
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

  tableData: any = [
    {
      serial_no: 'a',
      status: 'afd',
      request_reason: 'df',
      priority: '89',
      requested_at: 'eriogjio',
      assets_category: '4r4',
      allocation_type: '43r',
      company: '43r',
    },
    {
      serial_no: 'a',
      status: 'sjbds',
      request_reason: 'fsdewc',
      priority: '89',
      requested_at: 'weeailj',
      assets_category: '4r4',
      allocation_type: '43r',
      company: '43r',
    },
    {
      serial_no: 'a',
      status: 'afd',
      request_reason: 'df',
      priority: '89',
      requested_at: 'eriogjio',
      assets_category: '4r4',
      allocation_type: '43r',
      company: '43r',
    },
    {
      serial_no: 'a',
      status: 'sjbds',
      request_reason: 'fsdewc',
      priority: '89',
      requested_at: 'weeailj',
      assets_category: '4r4',
      allocation_type: '43r',
      company: '43r',
    },{
      serial_no: 'a',
      status: 'afd',
      request_reason: 'df',
      priority: '89',
      requested_at: 'eriogjio',
      assets_category: '4r4',
      allocation_type: '43r',
      company: '43r',
    },
    {
      serial_no: 'a',
      status: 'sjbds',
      request_reason: 'fsdewc',
      priority: '89',
      requested_at: 'weeailj',
      assets_category: '4r4',
      allocation_type: '43r',
      company: '43r',
    },{
      serial_no: 'a',
      status: 'afd',
      request_reason: 'df',
      priority: '89',
      requested_at: 'eriogjio',
      assets_category: '4r4',
      allocation_type: '43r',
      company: '43r',
    },
    {
      serial_no: 'a',
      status: 'sjbds',
      request_reason: 'fsdewc',
      priority: '89',
      requested_at: 'weeailj',
      assets_category: '4r4',
      allocation_type: '43r',
      company: '43r',
    },{
      serial_no: 'a',
      status: 'afd',
      request_reason: 'df',
      priority: '89',
      requested_at: 'eriogjio',
      assets_category: '4r4',
      allocation_type: '43r',
      company: '43r',
    },
    {
      serial_no: 'a',
      status: 'sjbds',
      request_reason: 'fsdewc',
      priority: '89',
      requested_at: 'weeailj',
      assets_category: '4r4',
      allocation_type: '43r',
      company: '43r',
    },
  ];


  submitRequest() {
    if (this.requestAsset.valid) {
      this.tableData.push(this.requestAsset.value);
    }else{
      this.requestAsset.markAllAsTouched()
    }
    this.dataSource = new MatTableDataSource<REQUEST_ASSETS>(this.tableData);
    // this.requestAsset.reset()
    console.log(this.dataSource.data, 'lll');
  }
}
