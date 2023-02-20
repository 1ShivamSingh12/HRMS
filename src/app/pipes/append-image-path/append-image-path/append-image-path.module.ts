import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppendImagePathPipe } from './append-image-path.pipe';


@NgModule({
  declarations: [
    AppendImagePathPipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    AppendImagePathPipe
  ]
})
export class AppendImagePathModule { }
