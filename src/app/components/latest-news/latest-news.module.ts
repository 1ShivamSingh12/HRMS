import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { NguCarouselModule } from '@ngu/carousel';
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
    NguCarouselModule
  ],
  exports:[
    LatestNewsComponent,
  ]
})
export class LatestNewsModule { }
