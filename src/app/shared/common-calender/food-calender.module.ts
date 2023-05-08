import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FoodCalenderComponent } from './food-calender.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [FoodCalenderComponent],
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports: [FoodCalenderComponent],
})
export class FoodCalenderModule {}
