import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { COMMON_VALIDATION, NAME_PATTERN } from 'src/app/constants/Validations';
import { Options, REQUEST_ASSETS } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-request-asset',
  templateUrl: './request-asset.component.html',
  styleUrls: ['./request-asset.component.scss'],
})
export class RequestAssetComponent implements OnInit {
  requestAsset!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.requestAsset = this.fb.group({
      serial_no: ['', [COMMON_VALIDATION, NAME_PATTERN]],
      status: ['', [COMMON_VALIDATION, NAME_PATTERN]],
      request_reason: ['', [COMMON_VALIDATION]],
      priority: ['', [COMMON_VALIDATION]],
      requested_at: ['', [COMMON_VALIDATION]],
      assets_category: ['', [COMMON_VALIDATION]],
      allocation_type: ['', [COMMON_VALIDATION]],
      company: ['', [COMMON_VALIDATION]],
    });
  }

  show: boolean = false;
  TABLE_DATA:any[]=[];

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
      isLink : true
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
        return `${element['request_reason']}`
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
      type:'text'
    },
  ];

  tableData: any = [
    // {
    //   serial_no: 'a',
    //   status: 'afd',
    //   request_reason: 'df',
    //   priority: '89',
    //   requested_at: 'eriogjio',
    //   assets_category: '4r4',
    //   allocation_type: '43r',
    //   company: '43r',
    // },
    // {
    //   serial_no: 'a',
    //   status: 'afd',
    //   request_reason: 'df',
    //   priority: '89',
    //   requested_at: 'eriogjio',
    //   assets_category: '4r4',
    //   allocation_type: '43r',
    //   company: '43r',
    // },

  ];

  REQUEST_ASSETS: Options = {
    search: true,
    show: true,
    searchPlaceholder: 'Search..',
    pagination: true,
    addButton: false,
  };

  assetsConfig: Options = this.REQUEST_ASSETS;

  submitRequest() {
    console.log(this.requestAsset.value);
    this.TABLE_DATA.push(this.requestAsset.value);

    this.tableData = new MatTableDataSource<REQUEST_ASSETS>(this.TABLE_DATA);

    console.log(this.tableData, 'lll');
  }
}
