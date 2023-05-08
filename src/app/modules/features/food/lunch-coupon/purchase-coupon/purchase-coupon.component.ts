import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FoodCalenderService } from 'src/app/services/food-calender/food-calender.service';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.scss']
})
export class PurchaseCouponComponent implements OnInit {
  constructor(private fb : FormBuilder , private foodService : FoodCalenderService) {}

  purchaseCoupon!: FormGroup;
  @Output() buttonSubmit = new EventEmitter<any>();


  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.purchaseCoupon = this.fb.group({
      coupon: ['', []],
      couponV: ['', []],
    })
  }


  couponCount(e:any){
    this.purchaseCoupon.controls['coupon'].setValue(e)
  }

  amount :any
  couponValue(e:any){
    this.amount = e;
    this.purchaseCoupon.controls['couponV'].setValue(e)
  }

  purchaseConfiq:any = {
    checkbox : true,
    menu : false
  }

  checkedCalender : any
  calender(e:any){
    console.log(e,'wekcew');
    this.checkedCalender = e
  }


  submit(){
    if(this.purchaseCoupon.value.coupon){
      this.foodService.sendData('true');
    }
  }
}
