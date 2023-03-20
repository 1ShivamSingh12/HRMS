import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownWithSearchComponent } from './dropdown-with-search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DropdownWithSearchComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports:[
    DropdownWithSearchComponent
  ]
})
export class DropdownWithSearchModule { }
