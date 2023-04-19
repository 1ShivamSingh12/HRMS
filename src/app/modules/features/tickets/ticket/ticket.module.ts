import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DropdownWithSearchModule } from 'src/app/shared/dropdown-with-search/dropdown-with-search.module';
import { validationError } from 'src/app/pipes/validation-error/valiadation-error.module';


@NgModule({
  declarations: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    CommonTableModule,
    MatOptionModule,
    MatSelectModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    AngularEditorModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    DropdownWithSearchModule,
    validationError,
  ],
  providers:[DatePipe]
})
export class TicketModule { }
