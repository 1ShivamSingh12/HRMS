import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { NguCarouselModule } from "@ngu/carousel";
import { GalleryComponent } from "./gallery.component";





@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    NguCarouselModule
  ],
  exports:[
    GalleryComponent
  ]
})
export class GalleryModule { }
