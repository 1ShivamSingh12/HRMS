import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Options } from 'src/app/constants/tableConfig';



@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent implements OnInit,OnChanges {
  displayedColumns: Array<any> = [];
  filterValue:any
  todayDate = new Date();
  constructor() {}
  @Input() tableColumns: Array<any> = [];
  @Input() dataSource! : MatTableDataSource<any>
  @Input() tableData!: Array<any>;
  @Output() buttonClick = new EventEmitter<string[]>();
  @Input() config! : Options
  @ViewChild('paginator') paginator!: MatPaginator;

  ngAfterViewInit(){
    if(this.dataSource){
      console.log(this.dataSource.data.length,'wefhwefyuewegi');
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnChanges(){

    this.dataSource.paginator = this.paginator
  }

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    console.log(this.tableColumns,'ppppppp');
    console.log(this.dataSource,'wcwecjebc');

  }

  applyFilter(event:Event){
    this.filterValue = (event.target as HTMLInputElement).value;
    console.log(this.dataSource,'this.dataSource');
    console.log(this.filterValue,'kkkkkk');
    this.filterValue = this.filterValue?.trim().toLowerCase();
    this.dataSource.filter = this.filterValue?.trim().toLowerCase();

  }
}
