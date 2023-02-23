import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwardsImageComponent } from './awards-image.component';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { AppendImagePathModule } from 'src/app/pipes/append-image-path/append-image-path/append-image-path.module';


@NgModule({
  declarations: [
    AwardsImageComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
AppendImagePathModule
  ],
  exports:[
  AwardsImageComponent
  ]
})
export class AwardsImageModule { }
