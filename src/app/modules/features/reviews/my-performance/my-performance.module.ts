import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPerformanceRoutingModule } from './my-performance-routing.module';
import { MyPerformanceComponent } from './my-performance.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { PerformanceDetailComponent } from './performance-detail/performance-detail.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    MyPerformanceComponent,
    PerformanceDetailComponent
  ],
  imports: [
    CommonModule,
    MyPerformanceRoutingModule,
    FooterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    FooterModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class MyPerformanceModule { }
