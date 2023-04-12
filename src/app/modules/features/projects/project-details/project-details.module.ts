import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { ProjectDetailComponent } from './project-detail.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { OverviewComponent } from './overview/overview.component';
import { NotesComponent } from './notes/notes.component';
import { DsrReportsComponent } from './dsr-reports/dsr-reports.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';

@NgModule({
  declarations: [
    ProjectDetailComponent,
    OverviewComponent,
    NotesComponent,
    DsrReportsComponent
  ],
  imports: [
    CommonModule,
    ProjectDetailsRoutingModule,
    MatIconModule,
    MatTabsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatExpansionModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    FooterModule,
    CommonTableModule
  ]
})
export class ProjectDetailsModule { }
