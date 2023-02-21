import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingsRoutingModule } from './my-trainings-routing.module';
import { MyTrainingsComponent } from './my-trainings.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from 'src/app/shared/footer/footer.module';


@NgModule({
  declarations: [
    MyTrainingsComponent
  ],
  imports: [
    CommonModule,
    MyTrainingsRoutingModule,
    MatIconModule,
    FooterModule
  ]
})
export class MyTrainingsModule { }
