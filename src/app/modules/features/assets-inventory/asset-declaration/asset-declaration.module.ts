import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetDeclarationRoutingModule } from './asset-declaration-routing.module';
import { AssetDeclarationComponent } from './asset-declaration.component';
import { CommonTableModule } from 'src/app/shared/common-table/common-table.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FooterModule } from 'src/app/shared/footer/footer.module';



@NgModule({
  declarations: [
    AssetDeclarationComponent
  ],
  imports: [
    CommonModule,
    AssetDeclarationRoutingModule,
    CommonTableModule,

    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatInputModule,
    FooterModule
  ]
})
export class AssetDeclarationModule { }
