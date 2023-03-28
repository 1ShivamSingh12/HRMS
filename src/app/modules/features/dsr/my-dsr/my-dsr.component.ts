import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { commondropDown } from 'src/app/constants/drop_down_data';
import { DSR_CONFIG } from 'src/app/constants/tableConfig';
import { DSR } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-my-dsr',
  templateUrl: './my-dsr.component.html',
  styleUrls: ['./my-dsr.component.scss'],
})
export class MyDsrComponent implements OnInit {
  dsrconfig: any = DSR_CONFIG;
    dataSource = new MatTableDataSource<DSR>();
    dropDown = commondropDown

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<DSR>(this.tableData);
  }

  show: boolean = true;

  addnew() {
    if (this.show == false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '15vw',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
  };

  tableColumns: Array<any> = [
    {
      columnDef: 'sr_no',
      header: 'Sr.No.',
      cell: (element: Record<string, any>) => `${element['sr_no']}`,
    },
    {
      columnDef: 'emp_name',
      header: 'Emp Name',
      cell: (element: Record<string, any>) => `${element['emp_name']}`,
    },
    {
      columnDef: 'emp_id',
      header: 'Emp Id',
      cell: (element: Record<string, any>) => `${element['emp_id']}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: Record<string, any>) => `${element['email']}`,
    },
    {
      columnDef: 'employee_type',
      header: 'Employee Type',
      cell: (element: Record<string, any>) => `${element['employee_type']}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: Record<string, any>) => `${element['date']}`,
    },
    {
      columnDef: 'total',
      header: 'Total(Logged Hr)',
      cell: (element: Record<string, any>) => `${element['total']}`,
    },
  ];

  tableData: Array<DSR> = [
    {
      sr_no: '',
      emp_name: '',
      emp_id: '',
      email: '',
      employee_type: '',
      date: '',
      total: '',
    },
  ];
}
