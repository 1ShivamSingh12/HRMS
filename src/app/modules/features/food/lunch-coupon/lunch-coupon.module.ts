import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LunchCouponRoutingModule } from './lunch-coupon-routing.module';
import { LunchCouponComponent } from './lunch-coupon.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { absolutePipe } from 'src/app/pipes/Absolute Path/absolute-path.module';
import { FoodCalenderModule } from 'src/app/shared/common-calender/food-calender.module';
import { StoreModule } from '@ngrx/store';
import { NUMBER_OF_COUPON } from 'src/app/store/state.selector';
import {NumberOfCouponReducer} from './../../../../store/state.reducers';

@NgModule({
  declarations: [
    LunchCouponComponent
  ],
  imports: [
    CommonModule,
    LunchCouponRoutingModule,
    MatIconModule,
    FooterModule,
    MatCheckboxModule,
    absolutePipe,
    FoodCalenderModule,
    StoreModule.forFeature(NUMBER_OF_COUPON,NumberOfCouponReducer)
  ]
})
export class LunchCouponModule { }
