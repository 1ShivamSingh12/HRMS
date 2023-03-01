import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { CommonTableComponent } from "./common-table.component";
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { TableElementGetterPipe } from './table-element-getter.pipe';




@NgModule({
  declarations: [
CommonTableComponent,
TableElementGetterPipe
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[
CommonTableComponent
  ]
})
export class CommonTableModule { }
