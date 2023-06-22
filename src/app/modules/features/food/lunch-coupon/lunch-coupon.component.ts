import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getNumberOfCouponSelector } from 'src/app/store/state.selector';

@Component({
  selector: 'app-lunch-coupon',
  templateUrl: './lunch-coupon.component.html',
  styleUrls: ['./lunch-coupon.component.scss'],
})
export class LunchCouponComponent implements OnInit {
  data: any;
  constructor(private store : Store ) {}
  ngOnInit(): void {
    this.store.select(getNumberOfCouponSelector).subscribe((res)=>{
      console.log(res,'efkv');
      this.data = res
    })
  }

  lunchConfiq:any = {
    checkbox : false,
    menu : false
  }

}
