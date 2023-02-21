import { Component, OnInit } from '@angular/core';
import { Options, POLICY } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-policy-document',
  templateUrl: './policy-document.component.html',
  styleUrls: ['./policy-document.component.scss']
})
export class PolicyDocumentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: '#',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
    },
    {
      columnDef: 'type',
      header: 'Type',
      cell: (element: Record<string, any>) => `${element['type']}`,
    },
    {
      columnDef: 'file_size',
      header: 'File Size',
      cell: (element: Record<string, any>) => `${element['file_size']}`,
    },
    {
      columnDef: 'last_modified',
      header: 'Last Modified',
      cell: (element: Record<string, any>) => `${element['last_modified']}`,
    },
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
    },
  ];

  tableData: Array<POLICY> = [
    {
      serial_number: '',
      name: '',
      type: '',
      file_size: '',
      last_modified: '',
      action: '',
    },
  ];

  POLICY: Options = {
    search: false,
    show:false,
    searchPlaceholder: "Search...",
    pagination: false,
    addButton: false,
};

policyConfig: Options = this.POLICY;

}
