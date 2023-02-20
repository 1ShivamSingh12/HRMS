import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { sideNavList } from 'src/app/constants/sidenav';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit,AfterViewInit {
  sideroutes = sideNavList;

  constructor() {}
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {

    if(window.innerWidth <= 1000){
      // let sideNavID = document.getElementById("side-nav-id") as HTMLElement || null
      // sideNavID.style.display = "none"
    this.isExpanded = false
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
}
