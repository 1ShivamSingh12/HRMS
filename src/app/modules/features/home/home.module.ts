import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { ReferalBonusModule } from 'src/app/components/referal-bonus/referal-bonus.module';
import { absolutePipe } from 'src/app/pipes/Absolute Path/absolute-path.module';
import { jobDetailModule } from 'src/app/components/job-details/job-details.module';
import { NguCarouselModule } from '@ngu/carousel';
import { GalleryModule } from 'src/app/components/gallery/gallery.module';
import { LatestNewsModule } from 'src/app/components/latest-news/latest-news.module';





@NgModule({
  declarations: [HomeComponent],
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
    LatestNewsModule

  ],
})
export class HomeModule {}
