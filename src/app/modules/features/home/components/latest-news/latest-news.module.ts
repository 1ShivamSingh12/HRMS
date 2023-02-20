import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { NguCarouselModule } from '@ngu/carousel';
import { CarouselModule } from "src/app/shared/carousel/carousel.module";
import { LatestNewsComponent } from "./latest-news.component";


@NgModule({
  declarations: [
    LatestNewsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    CarouselModule
  ],
  exports:[
    LatestNewsComponent,
  ]
})
export class LatestNewsModule { }
