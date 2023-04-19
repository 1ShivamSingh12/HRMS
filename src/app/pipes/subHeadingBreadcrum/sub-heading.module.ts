
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeadingPipe } from './sub-heading.pipe';


@NgModule({
  declarations: [SubHeadingPipe],
  imports: [
    CommonModule
  ],
  exports: [SubHeadingPipe]
})
export class SubHeadingModule { }


