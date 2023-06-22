import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { StoreModule } from '@ngrx/store';
import { NumberOfCouponReducer } from './../../../store/state.reducers';
import { NUMBER_OF_COUPON } from './../../../store/state.selector';


@NgModule({
  declarations: [
    FoodComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    StoreModule.forFeature(NUMBER_OF_COUPON , NumberOfCouponReducer)

  ]
})
export class FoodModule { }
