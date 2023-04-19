import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { commondropDown } from 'src/app/constants/drop_down_data';
import { ASSETS_DECLARATION_CONFIG, Options } from 'src/app/constants/tableConfig';
import { COMMON_VALIDATION } from 'src/app/constants/Validations';
import { ASSETS_DECLARATION } from 'src/app/interfaces/table.interface';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-asset-declaration',
  templateUrl: './asset-declaration.component.html',
  styleUrls: ['./asset-declaration.component.scss'],
})
export class AssetDeclarationComponent implements OnInit {

  assetsDeclarationConfig: Options = ASSETS_DECLARATION_CONFIG;
  dataSource = new MatTableDataSource<ASSETS_DECLARATION>()
  assestDeclaration!: FormGroup;
  dropDown = commondropDown

  constructor(private fb: FormBuilder , private snackbar : SnackbarService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ASSETS_DECLARATION>(this.tableData)
    this.createForm()
  }

  show : boolean = false

  showNewAsset(){
    if(this.show == false){
      this.show = true
    }else{
      this.show = false
    }
  }

  createForm() {
    this.assestDeclaration = this.fb.group({
      unique_asset_code: ['', [COMMON_VALIDATION]],
      serial_number: ['', [COMMON_VALIDATION]],
      model_number: ['', [COMMON_VALIDATION]],
      os: ['', [COMMON_VALIDATION]],
      os_version: ['', [COMMON_VALIDATION]],
      brand: ['', [COMMON_VALIDATION]],
      colour: ['', [COMMON_VALIDATION]],
      is_Working:['',[COMMON_VALIDATION]]
    });
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
    // {
    //   s_no: '',
    //   employee_Id: '',
    //   unique_asset_code: '',
    //   serial_number: '',
    //   model_number: '',
    //   os: '',
    //   os_version: '',
    //   brand : '',
    //   colour: '',
    //   images: '',
    //   is_Working: '',
    //   added : '',
    // },
  ];

  submitValue(){
    if (this.assestDeclaration.valid) {
      this.tableData.push(this.assestDeclaration.value);
    }else{
      this.assestDeclaration.markAllAsTouched()
    }
    this.dataSource = new MatTableDataSource<ASSETS_DECLARATION>(this.tableData);
    console.log(this.dataSource.data, 'lll');
  }

  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
      this.snackbar.openSnackBarErr('Should not start with space' , 'red-snackbar')
    }

  }

}
