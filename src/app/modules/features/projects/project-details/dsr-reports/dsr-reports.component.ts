import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dsr-reports',
  templateUrl: './dsr-reports.component.html',
  styleUrls: ['./dsr-reports.component.scss']
})
export class DsrReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listItems = [
    { Title: 'Total DSR Submitted' },
    { Title: 'Total DSR DUE' },
    { Title: 'Total DSR Pending Apporval' },
    { Title: 'Total DSR Approved' },
    { Title: 'Total DSR Rejected' },
    { Title: 'Pending AM Approval' },
    { Title: 'Pending PM Approvals' },
    { Title: 'Pending RM Approvals' },
  ];

}
