import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { LEAVE_TABLEDATA } from 'src/app/constants/const_data';
import { commondropDown } from 'src/app/constants/drop_down_data';
import { MY_LEAVE_DETAILS } from 'src/app/constants/routes';
import { MY_LEVAE_CONFIG, Options } from 'src/app/constants/tableConfig';
import { COMMON_VALIDATION } from 'src/app/constants/Validations';
import { MY_LEAVE } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss'],
})
export class MyLeaveComponent implements OnInit {
  myLeaveConfig: Options = MY_LEVAE_CONFIG;
  dataSource = new MatTableDataSource<MY_LEAVE>();
  dropDown = commondropDown;
  myLeaveForm!: FormGroup;

  constructor(private route: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<MY_LEAVE>(this.tableData);
    this.createForm();
  }

  createForm() {
    this.myLeaveForm = this.fb.group({
      leave_type: ['', [COMMON_VALIDATION]],
      request_from: ['', [COMMON_VALIDATION]],
      request_to: ['', [COMMON_VALIDATION]],
    });
  }

  checked = false;
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

  show = false;

  toggle() {
    if (this.show == false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  tableColumns: Array<any> = [
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
      type: 'button',
      buttons: [
        {
          icon: 'arrow_circle_right',
          data: (element: MY_LEAVE) => element,
          style: 'arrow-circle',
        },
      ],
    },
    {
      columnDef: 'leave_type',
      header: 'Leave Type',
      cell: (element: Record<string, any>) => `${element['leave_type']}`,
    },
    {
      columnDef: 'request_from',
      header: 'Request From',
      cell: (element: Record<string, any>) => `${element['request_from']}`,
    },
    {
      columnDef: 'request_to',
      header: 'Request To',
      cell: (element: Record<string, any>) => `${element['request_to']}`,
    },
    {
      columnDef: 'applied_on',
      header: 'Applied On',
      cell: (element: Record<string, any>) => `${element['applied_on']}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: Record<string, any>) => `${element['status']}`,
    },
    {
      columnDef: 'level1',
      header: 'Level 1',
      cell: (element: Record<string, any>) => `${element['level1']}`,
    },
    {
      columnDef: 'level2',
      header: 'Level 2',
      cell: (element: Record<string, any>) => `${element['level2']}`,
    },
  ];

  tableData: Array<any> = LEAVE_TABLEDATA;

  buttonClick(result: any) {
    console.log(result);

    this.route.navigate([MY_LEAVE_DETAILS.fullurl, result[1].id]);
  }

  saveData() {
    if (this.myLeaveForm.valid) {
      this.myLeaveForm.value['id'] = '23456'
      this.tableData.push(this.myLeaveForm.value);
      this.dataSource = new MatTableDataSource<MY_LEAVE>(this.tableData);
    } else {
      this.myLeaveForm.markAllAsTouched();
    }
  }
}
