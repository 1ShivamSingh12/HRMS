import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoryRoutingModule } from './directory-routing.module';
import { DirectoryComponent } from './directory.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownWithSearchModule } from 'src/app/shared/dropdown-with-search/dropdown-with-search.module';
import { BreadCrumModule } from 'src/app/pipes/breadcrum/breadcrum.module';



@NgModule({
  declarations: [
    DirectoryComponent
  ],
  imports: [
    CommonModule,
    DirectoryRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownWithSearchModule,
    BreadCrumModule
  ]
})
export class DirectoryModule { }
