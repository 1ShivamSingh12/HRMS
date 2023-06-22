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

import { NavBarItem } from 'src/app/interfaces/route.interface';
import { AUTH } from 'src/app/constants/routes';
import { Store } from '@ngrx/store';
import { getProfilePictureSelector } from 'src/app/store/state.selector';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',

  styleUrls: ['./feature.component.scss'],
  animations: [myProfileAnimation],
})
export class FeatureComponent implements OnInit, AfterViewInit {
  sideroutes:Array<NavBarItem> = sideNavList;
  showFiller = false;
  img:any

  notificationToggle = false;
  constructor(private dialog: MatDialog, public route: Router,private store : Store,private http: HttpClient) {

  }
  ngAfterViewInit(): void {}
  route1: any;
  myProfileData:any

  ngOnInit(): void {
    this.store.select(getProfilePictureSelector).subscribe((res:any)=>{
      this.img = res.profile
    })
    this.http.post('http://localhost:4000/my-profile',{email:localStorage.getItem('email')}).subscribe((res: any) => {
      console.log(res[0], 'kewfeufk');
      this.myProfileData = res[0]
    });

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
    console.log(item,'---LXI---',this.sideroutes)
    this.sideroutes.map((navbarItem:any)=>{
      // debugger
      if(item.title == navbarItem.title){
        navbarItem.show = !navbarItem.show
        console.log(navbarItem.title,'here',item.title)
      }else{
        navbarItem.show = false
        // console.log(navbarItem.title,'here2',item.title)

      }
    })
    console.log(item,'---LXI2---',this.sideroutes)

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
    this.notificationToggle = false;
  }

  signout(){
    this.route.navigate([AUTH.fullurl])
    localStorage.clear()
  }
}
