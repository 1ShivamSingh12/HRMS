import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { directory } from 'src/app/constants/const_data';
import {departmentDrop,directoryDropDown,} from 'src/app/constants/drop_down_data';
import { directoryStore } from 'src/app/store/directory.store';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  departmentSearch: any = 'All';
  searchValue = new FormControl();
  directoryControl = new FormControl();

  department: any;
  name: any;
  // filteredData: any[] = directory;
  filteredData$ = this.directoryStore.filtereDirectory$;

  dropDown: any;
  departmentDropDown = departmentDrop;

  constructor(public route : Router , private directoryStore : directoryStore) {}

  ngOnInit(): void {
    this.dropDown = directoryDropDown;
  }

  search(searchString:any) {
    // console.log(searchString,'edcik');

    this.directoryStore.patchState({searchString})
    // console.log(this.filteredData, 'kkkllnfdknk');
    // if (this.searchValue.value) {
    //   this.filteredData = directory.filter((item) => {
    //     if (
    //       item.name
    //         .toLowerCase()
    //         .includes(this.searchValue.value.trim().toLowerCase())
    //     ) {
    //       return true;
    //     }
    //     return false;
    //   });
    // } else {
    //   this.filteredData = directory;
    // }

    // if (this.departmentSearch !== 'All' && this.searchValue.value) {
    //   this.filteredData = directory.filter((item) => {
    //     if (
    //       item.designation
    //         .toLowerCase()
    //         .includes(this.departmentSearch.toLowerCase()) &&
    //       item.name
    //         .toLowerCase()
    //         .includes(this.searchValue.value.trim().toLowerCase())
    //     ) {
    //       return true;
    //     }
    //     return false;
    //   });
    // }
  }



  filterValue(filterValue: any) {


    console.log(this.directoryControl.value, 'kkkk');

    this.directoryStore.patchState({filterValue})


    // this.departmentSearch = e.value;
    // if (this.departmentSearch !== 'All' && this.searchValue.value) {
    //   this.filteredData = directory.filter((item) => {
    //     if (
    //       item.designation
    //         .toLowerCase()
    //         .includes(this.departmentSearch.toLowerCase()) &&
    //       item.name
    //         .toLowerCase()
    //         .includes(this.searchValue.value.trim().toLowerCase())
    //     ) {
    //       return true;
    //     }
    //     return false;
    //   });
    // } else if (this.departmentSearch !== 'All') {
    //   const search = e.value.toLowerCase();
    //   console.log(search);
    //   this.filteredData = directory.filter((item) => {
    //     const department = item.designation.toLowerCase();

    //     if (department.includes(search)) {
    //       return true;
    //     }
    //     return false;
    //   });
    // } else if (this.departmentSearch == 'All') {
    //   this.filteredData = directory;
    // }
  }

  reset(searchString:any , filterValue:any) {
    console.log(searchString , filterValue , 'djhvyuef');
    this.searchValue.setValue('')
    searchString = ''
    filterValue = ''
    this.directoryControl.setValue('')
    this.directoryStore.patchState({searchString})
    this.directoryStore.patchState({filterValue})


    // this.directoryControl.setValue() = 'All';
    // this.search();
  }
}
