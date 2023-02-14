import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngoingTraningRoutingModule } from './ongoing-traning-routing.module';
import { OngoingTraningComponent } from './ongoing-traning.component';


@NgModule({
  declarations: [
    OngoingTraningComponent
  ],
  imports: [
    CommonModule,
    OngoingTraningRoutingModule
  ]
})
export class OngoingTraningModule { }
