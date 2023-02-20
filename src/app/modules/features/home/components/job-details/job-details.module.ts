import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { JobDetailsComponent } from "./job-details.component";
import { NguCarouselModule } from '@ngu/carousel';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    JobDetailsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    NguCarouselModule,
    MatDialogModule

  ],
  exports:[
    JobDetailsComponent,
  ]
})
export class jobDetailModule { }
