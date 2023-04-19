import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { myProfileAnimation } from 'src/app/animations/myProfileAnimation';
import { sideNavList } from 'src/app/constants/sidenav';
import { Covid19Component } from 'src/app/shared/dialog/covid19/covid19.component';
import { HelpDialogComponent } from 'src/app/shared/dialog/help-dialog/help-dialog.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',

  styleUrls: ['./feature.component.scss'],
  animations: [myProfileAnimation],
})
export class FeatureComponent implements OnInit, AfterViewInit {
  sideroutes = sideNavList;
  showFiller = false;
  notificationToggle = false;
  constructor(private dialog: MatDialog , public route : Router) {}
  ngAfterViewInit(): void {}
route1:any
  ngOnInit(): void {
  

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth <= 1000) {
      this.isExpanded = false;
    } else {
      this.isExpanded = true;
    }
  }
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  show() {}

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  collapseOtherMenus(item: any) {
    // this.sideroutes.map((navbarItem:any)=>{
    //   if(item.title != navbarItem.title){
    //     item.show = false;
    //   }
    // })
    item.show = !item.show
  }
  options: MatDialogConfig = {
    width: '28rem',
    // panelClass: 'refer-a-candidate-dialog',
  };
  openDialog() {
    this.dialog.open(HelpDialogComponent, this.options);
  }

  openCovid() {
    let config: MatDialogConfig = {
      autoFocus: false,
      height: '78%',
    };
    this.dialog.open(Covid19Component, config);
  }
  toggleDiv() {
    this.notificationToggle = false
  }
}
