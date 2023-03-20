import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ASSETS_CONFIG, Options } from 'src/app/constants/tableConfig';
import { ASSETS } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-my-assets',
  templateUrl: './my-assets.component.html',
  styleUrls: ['./my-assets.component.scss']
})
export class MyAssetsComponent implements OnInit {
  assetsConfig: Options = ASSETS_CONFIG;
  dataSource = new MatTableDataSource<ASSETS>()


  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ASSETS>(this.tableData)

  }


  tableColumns: Array<any> = [
    {
      columnDef: 'assets_name',
      header: 'Assets Name',
      cell: (element: Record<string, any>) => `${element['assets_name']}`,
    },
    {
      columnDef: 'assets_category',
      header: 'Assets Category',
      cell: (element: Record<string, any>) => `${element['assets_category']}`,
    },
    {
      columnDef: 'Company Asset Code',
      header: 'company_asset_code',
      cell: (element: Record<string, any>) => `${element['company_asset_code']}`,
    },
    {
      columnDef: 'brand',
      header: 'Brand',
      cell: (element: Record<string, any>) => `${element['brand']}`,
    },
    {
      columnDef: 'serial_no',
      header: 'Serial No..',
      cell: (element: Record<string, any>) => `${element['serial_no']}`,
    },
    {
      columnDef: 'model',
      header: 'Model',
      cell: (element: Record<string, any>) => `${element['model']}`,
    },
    {
      columnDef: 'is_working',
      header: 'Is Working?',
      cell: (element: Record<string, any>) => `${element['is_working']}`,
    },
    {
      columnDef: 'company',
      header: 'Company',
      cell: (element: Record<string, any>) => `${element['company']}`,
    },
  ];

  tableData: Array<ASSETS> = [
    {
      assets_name: 'LAPTOP',
      assets_category: 'Laptop',
      company_asset_code: 'A&S M52',
      brand: 'HP',
      serial_no: '0000SA',
      model: 'G5',
      is_working: 'Yes',
      company : 'Appinventiv Technology',
    },
  ];



}
