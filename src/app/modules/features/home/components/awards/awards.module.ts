import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardsComponent } from './awards.component';
import { AwardsImageModule } from '../awards-image/awards-image.module';




@NgModule({
  declarations: [
    AwardsComponent
  ],
  imports: [
    CommonModule,
    AwardsImageModule
  ],
  exports:[
    AwardsComponent
  ]
})
export class AwardsModule { }
