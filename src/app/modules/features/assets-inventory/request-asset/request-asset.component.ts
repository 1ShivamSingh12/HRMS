import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      serial_no: ['1', [COMMON_VALIDATION, NAME_PATTERN]],
      status: ['1', [COMMON_VALIDATION, NAME_PATTERN]],
      request_reason: ['option1', [COMMON_VALIDATION]],
      priority: ['option1', [COMMON_VALIDATION]],
      requested_at: ['option1', [COMMON_VALIDATION]],
      assets_category: ['option1', [COMMON_VALIDATION]],
      allocation_type: ['option1', [COMMON_VALIDATION]],
      company: ['option1', [COMMON_VALIDATION]],
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
        // console.log(element,"elemnt")
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
    },
  ];

  tableData: Array<REQUEST_ASSETS> = [
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
      status: 'afd',
      request_reason: 'df',
      priority: '89',
      requested_at: 'eriogjio',
      assets_category: '4r4',
      allocation_type: '43r',
      company: '43r',
    },

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
    this.tableData.push(this.requestAsset.value);
    console.log(this.tableData, 'lll');
  }
}
