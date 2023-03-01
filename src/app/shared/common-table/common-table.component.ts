import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent implements OnInit {
  @Input() tableColumns: Array<any> = [];

  @Input() tableData: Array<any> = [];
  @Input() isPageable: boolean = false;
  @Input() defaultPaginationSize: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.defaultPaginationSize[1];

  get dataSource(){
    console.log(this.tableData,"123");
    return this.tableData;
  }

  ngAfterViewInit(){
    console.log(this.tableColumns,"TC");
  }


  displayedColumns: Array<any> = [];
  // dataSource: MatTableDataSource<any> = new MatTableDataSource();
  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    console.log(this.tableColumns,'ppppppp');

    // this.dataSource = new MatTableDataSource(this.tableData);
    // console.log(this.data, 'kkkk');
  }
}
