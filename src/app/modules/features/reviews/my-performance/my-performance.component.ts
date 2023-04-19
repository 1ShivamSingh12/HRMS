import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { monthList } from 'src/app/constants/const_data';
import { PerformanceDetailComponent } from './performance-detail/performance-detail.component';


@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss']
})
export class MyPerformanceComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  yearValue : any = '2023'
  toggleYear = true

  ngOnInit(): void {
    console.log(monthList);

  }

  review_list:any = monthList
  yearSelect(e:any){
    console.log(e.value);
    if(e.value == '2023'){
      this.toggleYear = true
    }else{
      this.toggleYear = false
    }
  }

  openDialog(){
    // let config: MatDialogConfig = {
    //   autoFocus: false,
    //   height: '30%',
    // };
    this.dialog.open(PerformanceDetailComponent)
  }

}
