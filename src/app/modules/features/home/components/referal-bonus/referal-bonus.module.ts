import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { ReferalBonusComponent } from "./referal-bonus.component";




@NgModule({
  declarations: [
    ReferalBonusComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  exports:[
    ReferalBonusComponent
  ]
})
export class ReferalBonusModule { }
