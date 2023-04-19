import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { commondropDown } from 'src/app/constants/drop_down_data';
import { TICKET_CONFIG } from 'src/app/constants/tableConfig';
import { COMMON_VALIDATION } from 'src/app/constants/Validations';
import { TICKET } from 'src/app/interfaces/table.interface';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  ticketconfig: any = TICKET_CONFIG;
  ticket!: FormGroup;
  show: boolean = true;
  dropDown = commondropDown;
  dataSource = new MatTableDataSource<TICKET>();

  constructor(private fb: FormBuilder , private snackbar : SnackbarService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<TICKET>(this.tableData);
    this.createForm();
  }

  createForm() {
    this.ticket = this.fb.group({
      subject: ['', [COMMON_VALIDATION]],
      department: ['', [COMMON_VALIDATION]],
      ticket: ['', [COMMON_VALIDATION]],
      priority: ['', [COMMON_VALIDATION]],
      description: ['', [COMMON_VALIDATION]],
      ticket_code:['',[]],
      employee:['',[]],
      status:['',[]],
      date:['',[]]

    });
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
  showticket() {
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
    },
    {
      columnDef: 'ticket_code',
      header: 'Ticket Code',
      cell: (element: Record<string, any>) => `${element['ticket_code']}`,
    },
    {
      columnDef: 'priority',
      header: 'Priority',
      cell: (element: Record<string, any>) => `${element['priority']}`,
    },
    {
      columnDef: 'employee',
      header: 'Employee',
      cell: (element: Record<string, any>) => `${element['employee']}`,
    },
    {
      columnDef: 'subject',
      header: 'Subject',
      cell: (element: Record<string, any>) => `${element['subject']}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: Record<string, any>) => `${element['status']}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: Record<string, any>) => `${element['date']}`,
    },
  ];

  tableData: Array<TICKET> = [
    // {
    //   action: '',
    //   ticket_code: '',
    //   priority: '',
    //   employee: '',
    //   subject: '',
    //   status: '',
    //   date: '',
    // },
  ];

  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
      this.snackbar.openSnackBarErr('Should not start with space' , 'red-snackbar')
    }

  }


  ticketSave() {
    if (this.ticket.valid) {

      this.ticket.controls['ticket_code'].setValue('123')
      this.ticket.controls['employee'].setValue('Shivam')
      this.ticket.controls['status'].setValue('Pending')
      this.ticket.controls['date'].setValue(new Date())

      this.tableData.push(this.ticket.value);
      this.dataSource = new MatTableDataSource<TICKET>(this.tableData);
    } else {
      this.ticket.markAllAsTouched();
    }
  }
}
