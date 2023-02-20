import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardsComponent } from './awards.component';



@NgModule({
  declarations: [
    AwardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AwardsComponent
  ]
})
export class AwardsModule { }
