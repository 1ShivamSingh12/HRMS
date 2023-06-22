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
import {MatCardModule} from '@angular/material/card';
import { BreadCrumModule } from 'src/app/pipes/breadcrum/breadcrum.module';
import { StoreModule } from '@ngrx/store';
import { PROFILE_PICTURE_PREVIEW } from 'src/app/store/state.selector';
import { profilePictureReducer } from 'src/app/store/state.reducers';

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
    FooterModule,
    MatCardModule,
    BreadCrumModule,
    StoreModule.forFeature(PROFILE_PICTURE_PREVIEW, profilePictureReducer)
  ],
})
export class FeaturesModule {}
