import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseCouponRoutingModule } from './purchase-coupon-routing.module';
import { PurchaseCouponComponent } from './purchase-coupon.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FoodCalenderModule } from 'src/app/shared/common-calender/food-calender.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { absolutePipe } from 'src/app/pipes/Absolute Path/absolute-path.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PurchaseCouponComponent
  ],
  imports: [
    CommonModule,
    PurchaseCouponRoutingModule,
    MatCheckboxModule,
    MatIconModule,
    FoodCalenderModule,
    MatFormFieldModule,
    MatInputModule,
    absolutePipe,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class PurchaseCouponModule { }
