import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LunchCouponRoutingModule } from './lunch-coupon-routing.module';
import { LunchCouponComponent } from './lunch-coupon.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    LunchCouponComponent
  ],
  imports: [
    CommonModule,
    LunchCouponRoutingModule,
    MatIconModule,
    FooterModule
  ]
})
export class LunchCouponModule { }
