import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { sideNavList } from 'src/app/constants/sidenav';
import { HelpDialogComponent } from 'src/app/shared/dialog/help-dialog/help-dialog.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit,AfterViewInit {
  sideroutes = sideNavList;

  constructor(private dialog : MatDialog) {}
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth <= 1000){
    this.isExpanded = false
    }else{
      this.isExpanded = true
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
  collapseOtherMenus(item:any){

    // console.log(item,'ALTO');

    // this.sideroutes.map((navbarItem:any)=>{
    //   if(item.title != navbarItem.title){
    //     item.show = false;
    //   }
    // })
    // item.show = !item.show
  }
  options: MatDialogConfig = {
    width: '28rem',
    // panelClass: 'refer-a-candidate-dialog',
  };
  openDialog(){
    this.dialog.open(HelpDialogComponent,
      this.options)
  }
}
