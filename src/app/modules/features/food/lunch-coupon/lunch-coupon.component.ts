import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunch-coupon',
  templateUrl: './lunch-coupon.component.html',
  styleUrls: ['./lunch-coupon.component.scss'],
})
export class LunchCouponComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }

  lunchConfiq:any = {
    checkbox : false,
    menu : false
  }

}
