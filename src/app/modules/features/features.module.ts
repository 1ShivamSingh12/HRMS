import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeatureComponent } from './feature.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { absolutePipe } from 'src/app/pipes/Absolute Path/absolute-path.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { FooterModule } from 'src/app/shared/footer/footer.module';

@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    absolutePipe,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    FooterModule
  ],
})
export class FeaturesModule {}
