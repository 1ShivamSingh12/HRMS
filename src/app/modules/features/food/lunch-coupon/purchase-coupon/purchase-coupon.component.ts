import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FoodCalenderService } from 'src/app/services/food-calender/food-calender.service';
import { directoryStore } from 'src/app/store/directory.store';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.scss']
})
export class PurchaseCouponComponent implements OnInit {
  constructor(private fb : FormBuilder , private foodService : FoodCalenderService , public store: directoryStore) {}

  // purchaseCoupon!: FormGroup;
  // @Output() buttonSubmit = new EventEmitter<any>();


  ngOnInit(): void {
    // this.createForm() 
  }

  // createForm(){
  //   this.purchaseCoupon = this.fb.group({
  //     coupon: ['', []],
  //     couponV: ['', []],
  //   })
  // }


  // couponCount(e:any){
  //   this.purchaseCoupon.controls['coupon'].setValue(this.store.directory1$)
  // }

  // amount :any
  // couponValue(e:any){
  //   this.amount = e;
  //   this.purchaseCoupon.controls['couponV'].setValue(e)
  // }

  purchaseConfiq:any = {
    checkbox : true,
    menu : false
  }

  // checkedCalender : any
  // calender(e:any){
  //   console.log(e,'wekcew');
  //   this.checkedCalender = e
  // }

  submit(){
    if(this.store.couponValue$){
      this.foodService.sendData('true');
    }
  }
}
