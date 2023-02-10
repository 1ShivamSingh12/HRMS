import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})


export class CommonTableComponent implements OnInit {


  @Input()tableColumns :Array<any> = []
  @Input()tableData:Array<any> = []
  @Input() isPageable:boolean = false;
  @Input() defaultPaginationSize:number[] = [5,10,15];
  @Input() defaultPageSize = this.defaultPaginationSize[1];

  displayedColumns: Array<any> = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
  }

}
