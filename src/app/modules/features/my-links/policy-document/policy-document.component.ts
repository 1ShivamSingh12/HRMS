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
      isButton:true,
      buttons:[
        {
          heading:'Download',
          icon:'download'
        }
      ]
    },
  ];

  tableData: Array<POLICY> = [
    {
      serial_number: 1,
      name: ' Appinventiv_Policy_Manual',
      type: '	pdf',
      file_size: '341.71 KB',
      last_modified: 'May-13-2022',
      action:''
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
