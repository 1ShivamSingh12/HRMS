import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { ReferalBonusModule } from 'src/app/modules/features/home/components/referal-bonus/referal-bonus.module';
import { absolutePipe } from 'src/app/pipes/Absolute Path/absolute-path.module';
import { jobDetailModule } from 'src/app/modules/features/home/components/job-details/job-details.module';
import { NguCarouselModule } from '@ngu/carousel';
import { GalleryModule } from 'src/app/modules/features/home/components/gallery/gallery.module';
import { LatestNewsModule } from 'src/app/modules/features/home/components/latest-news/latest-news.module';
import { JobCardComponent } from './carousel-components/job-card/job-card.component';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { NewMembersCarouselComponent } from './carousel-components/new-members-carousel/new-members-carousel.component';
import { LatestNewsCarouselComponent } from './carousel-components/latest-news-carousel/latest-news-carousel.component';
import { AwardsModule } from './components/awards/awards.module';
import { ReferCandidateDialogComponent } from './dialog/refer-candidate-dialog/refer-candidate-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CarouselDialogComponent } from './dialog/carousel-dialog/carousel-dialog.component';
import { AppendImagePathModule } from 'src/app/pipes/append-image-path/append-image-path/append-image-path.module';
import { GalleryCarouselComponent } from './carousel-components/gallery-carousel/gallery-carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorModule } from 'src/app/shared/field-error/field-error.module';
import { validationError } from 'src/app/pipes/validation-error/valiadation-error.module';
import { StoreModule } from '@ngrx/store';
import { REFER_A_FRIEND, getReferFriendAelector } from 'src/app/store/state.selector';
import { ReferAFriendReducer } from 'src/app/store/state.reducers';


@NgModule({
  declarations: [
    HomeComponent,
    JobCardComponent,
    NewMembersCarouselComponent,
    LatestNewsCarouselComponent,
    ReferCandidateDialogComponent,
    CarouselDialogComponent,
    GalleryCarouselComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IvyCarouselModule,
    MatIconModule,
    FooterModule,
    ReferalBonusModule,
    absolutePipe,
    jobDetailModule,
    ReferalBonusModule,
    NguCarouselModule,
    GalleryModule,
    LatestNewsModule,
    AwardsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    AppendImagePathModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    FieldErrorModule,
    validationError,
    // StoreModule.forFeature(REFER_A_FRIEND, ReferAFriendReducer)
  ],
})
export class HomeModule {}
