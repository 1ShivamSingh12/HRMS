import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { CarouselModule } from "src/app/shared/carousel/carousel.module";
import { LatestNewsComponent } from "./latest-news.component";
import { ViewDetailsComponent } from './view-details/view-details.component';
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
  declarations: [
    LatestNewsComponent,
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    CarouselModule,
    MatDialogModule
  ],
  exports:[
    LatestNewsComponent,
  ]
})
export class LatestNewsModule { }
