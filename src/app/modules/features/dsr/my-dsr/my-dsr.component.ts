import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DSR_TABLEDATA } from 'src/app/constants/const_data';
import {
  approvalDropDown,
  commondropDown,
  dsrProject,
  hoursDropDown,
} from 'src/app/constants/drop_down_data';
import { LOGIN, MY_DSR_DETAIL } from 'src/app/constants/routes';
import { DSR_CONFIG } from 'src/app/constants/tableConfig';
import { COMMON_VALIDATION } from 'src/app/constants/Validations';
import { DSR } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-my-dsr',
  templateUrl: './my-dsr.component.html',
  styleUrls: ['./my-dsr.component.scss'],
})
export class MyDsrComponent implements OnInit {
  dsrconfig: any = DSR_CONFIG;
  dataSource = new MatTableDataSource<DSR>();
  dropDown = dsrProject;
  approvaldropDown = approvalDropDown;
  hoursdropDown = hoursDropDown;
  approval = new FormControl();
  hours = new FormControl();
  from_date = new FormControl();
  to_date = new FormControl();
  submission_status = new FormControl();
  project = new FormControl();
  miscellaneousShow = false;
  interviewShow = false;
  todayDate = new Date();
  show: boolean = true;
  dsrForm!: FormGroup;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<DSR>(this.tableData);
    this.createForm();
  }

  createForm() {
    this.dsrForm = this.fb.group({
      project: ['', [COMMON_VALIDATION]],
      date: ['', [COMMON_VALIDATION]],
      hours: ['', [COMMON_VALIDATION]],
      dsr: ['', [COMMON_VALIDATION]],
    });
  }

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
    {
      columnDef: 'approval_status',
      header: 'Fianl Approval',
      cell: (element: Record<string, any>) => `${element['approval_status']}`,
      type: 'button',
      buttons: [
        {
          type: 'const_data',
          style: 'dsr_button',
          data: (element: DSR) => element,
          action: 'pending',
        },
      ],
    },
  ];

  tableData: Array<any> = DSR_TABLEDATA;

  buttonClick(result: any) {
    let temp = result[1].date;
    window.open(MY_DSR_DETAIL.fullurl + '/' + temp, '_blank');
  }

  filterData: any = DSR_TABLEDATA;

  filterValue(e: any) {
    if (this.approval.value && !this.hours.value) {
      this.filterData = this.tableData.filter(
        (item: any) => item.approval_status == this.approval.value
      );
    } else if (!this.approval.value && this.hours.value) {
      if (this.hours.value == 1) {
        this.filterData = this.tableData.filter((item: any) => item.total < 5);
      } else if (this.hours.value == 2) {
        this.filterData = this.tableData.filter(
          (item: any) => item.total > 5 && item.total < 8
        );
      } else if (this.hours.value == 3) {
        this.filterData = this.tableData.filter((item: any) => item.total > 8);
      } else {
        this.filterData = this.tableData.filter((item: any) => item.total > 10);
      }
    }
    this.dataSource = new MatTableDataSource<DSR>(this.filterData);
  }

  fill(e: any) {
    if (e.checked == true) {
      this.dsrForm.controls['dsr'].setValue(
        'Today no work has been done on this project'
      );
      this.dsrForm.controls['hours'].setValue('00:00');
    } else {
      this.dsrForm.controls['dsr'].reset();
      this.dsrForm.controls['hours'].reset();
    }
  }

  selectProject(data: any) {
    // console.log(data,"bismyle")
    if (data.value == 'Training') {
      this.miscellaneousShow = false;
      this.interviewShow = false;
    } else if (data.value == 'Miscellaneous') {
      this.miscellaneousShow = true;
      this.interviewShow = false;
    } else if (data.value == 'Interview') {
      this.interviewShow = true;
      this.miscellaneousShow = false;
    }
  }

  Startdate: any;
  EndDate : any

  dateFilter(e: any) {
    this.Startdate = this.datePipe.transform(e.value, 'YYYY-MM-dd');
    if (e.value) {
      this.filterData = this.tableData.filter((item: any) => item.date >= this.Startdate);
      console.log(this.filterData, 'egvlerlg');
    }
    this.dataSource = new MatTableDataSource<DSR>(this.filterData);
  }

  EnddateFilter(e:any){
    this.EndDate = this.datePipe.transform(e.value, 'YYYY-MM-dd');
    if (e.value) {
      this.filterData = this.tableData.filter((item: any) => item.date <= this.EndDate);
      console.log(this.filterData, 'egvlerlg');
    }
    this.dataSource = new MatTableDataSource<DSR>(this.filterData);
  }
}
