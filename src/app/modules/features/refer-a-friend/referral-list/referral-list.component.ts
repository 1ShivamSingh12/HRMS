import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { REFERRAL_LIST } from 'src/app/interfaces/table.interface';
import { getReferFriendAelector } from 'src/app/store/state.selector';

@Component({
  selector: 'app-referral-list',
  templateUrl: './referral-list.component.html',
  styleUrls: ['./referral-list.component.scss']
})
export class ReferralListComponent implements OnInit {
  dataSource = new MatTableDataSource<REFERRAL_LIST>();

  constructor(private store: Store) { }

  table:any

  ngOnInit(): void {
    // this.data(
    this.store.select(getReferFriendAelector).subscribe((res:any)=>{
      console.log(res);
      this.table = res
    });

    console.log(this.table,'ekjfh');

    this.dataSource = new MatTableDataSource<REFERRAL_LIST>(this.table);


  }

  tableColumns: Array<any> = [
    {
      columnDef: 'serial_number',
      header: 'S.No',
      cell: (element: Record<string, any>) => `${element['serial_number']}`,
    },
    {
      columnDef: 'candidate_name',
      header: 'First Name',
      cell: (element: Record<string, any>) => `${element['candidate_name']}`,
      isLink:true
    },
    {
      columnDef: 'experience',
      header: 'Last Name',
      cell: (element: Record<string, any>) => `${element['experience']}`,
    },
    {
      columnDef: 'department',
      header: 'department',
      cell: (element: Record<string, any>) => `${element['department']}`,
    },
    {
      columnDef: 'position',
      header: 'position',
      cell: (element: Record<string, any>) => `${element['position']}`,
    },
    {
      columnDef: 'date_of_referral',
      header: 'Date 0f Referral',
      cell: (element: Record<string, any>) => `${element['date_of_referral']}`,
    },
    {
      columnDef: 'candidate_status',
      header: 'candidate_status',
      cell: (element: Record<string, any>) => `${element['candidate_status']}`,
    },
    {
      columnDef: 'resume',
      header: 'Camdidate Status',
      cell: (element: Record<string, any>) => `${element['resume']}`,
    },
  ];

  tableData: Array<REFERRAL_LIST> = [
    {
      serial_number: 1,
      candidate_name: 'arpit',
      experience: '',
      department: '',
      position: '',
      date_of_referral: '',
      candidate_status: 'something',
      resume : 'Rejected'
    },
    {
      serial_number: 1,
      candidate_name: 'Shivam',
      experience: '',
      department: '',
      position: '',
      date_of_referral: '',
      candidate_status: 'something',
      resume : 'Rejected'
    },

  ];

}
