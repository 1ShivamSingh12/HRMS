import { Component, OnInit } from '@angular/core';
import { ASSETS_DECLARATION, Options } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-asset-declaration',
  templateUrl: './asset-declaration.component.html',
  styleUrls: ['./asset-declaration.component.scss'],
})
export class AssetDeclarationComponent implements OnInit {

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
      columnDef: 's_no',
      header: 'S No.',
      cell: (element: Record<string, any>) => `${element['s_no']}`,
    },
    {
      columnDef: 'employee_Id',
      header: 'Employee Id',
      cell: (element: Record<string, any>) => `${element['employee_Id']}`,
    },
    {
      columnDef: 'unique_asset_code',
      header: 'Unique Asset Code',
      cell: (element: Record<string, any>) => `${element['unique_asset_code']}`,
    },
    {
      columnDef: 'serial_number',
      header: 'Serial Number',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'model_number',
      header: 'Model Number',
      cell: (element: Record<string, any>) => `${element['model_number']}`,
    },
    {
      columnDef: 'os',
      header: 'OS',
      cell: (element: Record<string, any>) => `${element['os']}`,
    },
    {
      columnDef: 'os_version',
      header: 'OS version',
      cell: (element: Record<string, any>) => `${element['os_version']}`,
    },
    {
      columnDef: 'brand',
      header: 'Brand',
      cell: (element: Record<string, any>) => `${element['brand']}`,
    },
    {
      columnDef: 'colour',
      header: 'Colour',
      cell: (element: Record<string, any>) => `${element['colour']}`,
    },
    {
      columnDef: 'images',
      header: 'Images',
      cell: (element: Record<string, any>) => `${element['images']}`,
    },
    {
      columnDef: 'is_Working',
      header: 'Is Working?',
      cell: (element: Record<string, any>) => `${element['is_Working']}`,
    },
    {
      columnDef: 'added',
      header: 'Added',
      cell: (element: Record<string, any>) => `${element['added']}`,
    },
  ];

  tableData: Array<ASSETS_DECLARATION> = [
    {
      s_no: '',
      employee_Id: '',
      unique_asset_code: '',
      serial_number: '',
      model_number: '',
      os: '',
      os_version: '',
      brand : '',
      colour: '',
      images: '',
      is_Working: '',
      added : '',
    },
  ];

  ASSETS_DECLARATION: Options = {
    search: true,
    show:true,
    searchPlaceholder: "Search..",
    pagination: true,
    addButton: false,
};

assetsDeclarationConfig: Options = this.ASSETS_DECLARATION;

}
