import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MY_LEAVE, Options } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss']
})
export class MyLeaveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

  show = false

  toggle(){
    if(this.show == false){
      this.show = true
    }else{
      this.show = false
    }
  }
  tableColumns: Array<any> = [
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
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

  tableData: Array<MY_LEAVE> = [
    {
      action: '',
      leave_type: '',
      request_from: '',
      request_to: '',
      applied_on: '',
      status: '',
      level1: '',
      level2 : '',
    },
  ];


  MY_LEVAE: Options = {
    search: true,
    show:true,
    searchPlaceholder: "Search..",
    pagination: true,
    addButton: false,
};

myLeaveConfig: Options = this.MY_LEVAE;

}
