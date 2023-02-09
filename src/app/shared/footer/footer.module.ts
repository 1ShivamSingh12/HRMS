import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

import { FooterComponent } from "./footer.component";

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ],
  exports:[
    FooterComponent,
  ]
})
export class FooterModule { }
