import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommonTableModule } from "src/app/shared/common-table/common-table.module";
import { ShiftComponent } from "./shift.component";





@NgModule({
  declarations: [
ShiftComponent
  ],
  imports: [
    CommonModule,
    CommonTableModule
  ],
  exports:[
ShiftComponent
  ]
})
export class ShiftModule { }
