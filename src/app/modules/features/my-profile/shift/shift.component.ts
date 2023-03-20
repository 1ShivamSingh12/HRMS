import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { myProfileAnimation } from 'src/app/animations/myProfileAnimation';
import { SHIFT } from 'src/app/interfaces/table.interface';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss'],
  animations: [myProfileAnimation],
})
export class ShiftComponent implements OnInit {

  dataSource = new MatTableDataSource<SHIFT>();

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<SHIFT>(this.tableData);
  }

  tableColumns: Array<any> = [
    {
      columnDef: 'date_of_joining',
      header: 'Date of Joining',
      cell: (element: Record<string, any>) => `${element['date_of_joining']}`,
    },
    {
      columnDef: 'office_shift',
      header: 'Office Shift',
      cell: (element: Record<string, any>) => `${element['office_shift']}`,
    },
  ];

  tableData: Array<SHIFT> = [
    {
      date_of_joining: ' Feb-07-2022',
      office_shift: 'Morning Shift',
    },
  ];
}
