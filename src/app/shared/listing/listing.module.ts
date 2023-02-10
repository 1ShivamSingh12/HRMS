import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { ListingComponent } from "./listing.component";

@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ],
  exports:[
    ListingComponent,
  ]
})
export class ListingModule { }
