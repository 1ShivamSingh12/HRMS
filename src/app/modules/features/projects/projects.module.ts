import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectGridComponent } from './project-grid/project-grid.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectListComponent,
    ProjectGridComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    CommonTableModule,
    MatButtonToggleModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class ProjectsModule { }
