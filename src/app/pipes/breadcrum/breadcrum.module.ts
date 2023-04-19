
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumPipe } from './breadcrum.pipe';


@NgModule({
  declarations: [BreadcrumPipe],
  imports: [
    CommonModule
  ],
  exports: [BreadcrumPipe]
})
export class BreadCrumModule { }


