import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTraningRoutingModule } from './my-traning-routing.module';
import { MyTrainingComponent } from './my-training.component';
import { MatIconModule } from '@angular/material/icon';
import { absolutePipe } from 'src/app/pipes/Absolute Path/absolute-path.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    MyTrainingComponent
  ],
  imports: [
    CommonModule,
    MyTraningRoutingModule,
    MatIconModule,
    absolutePipe,
    FooterModule
  ]
})
export class MyTraningModule { }
