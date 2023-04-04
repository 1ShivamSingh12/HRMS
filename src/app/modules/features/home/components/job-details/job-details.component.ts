import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { JOB_DETAILS } from 'src/app/constants/routes';
import { ReferCandidateDialogComponent } from '../../dialog/refer-candidate-dialog/refer-candidate-dialog.component';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  ngOnInit(): void {}

  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: { timing: 2000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  carouselItems = [1, 2, 3];

  constructor(private cdr: ChangeDetectorRef, public dialog: MatDialog , private route  :Router) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  options: MatDialogConfig = {
    width: '51rem',
    panelClass: 'refer-a-candidate-dialog',
  };
  openDialog() {
    const dialogRef = this.dialog.open(ReferCandidateDialogComponent,this.options );
  }

  viewDetail(){
    this.route.navigate([JOB_DETAILS.fullurl])
  }
}
