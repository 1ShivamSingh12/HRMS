import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualPunchRoutingModule } from './manual-punch-routing.module';
import { ManualPunchComponent } from './manual-punch.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';


@NgModule({
  declarations: [
    ManualPunchComponent
  ],
  imports: [
    CommonModule,
    ManualPunchRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    CommonTableModule
  ]
})
export class ManualPunchModule { }
