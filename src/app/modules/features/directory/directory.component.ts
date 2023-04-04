import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { directory } from 'src/app/constants/const_data';
import {departmentDrop,directoryDropDown,} from 'src/app/constants/drop_down_data';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  departmentSearch: any = 'All';
  searchValue = new FormControl();
  department: any;
  name: any;
  filteredData: any[] = directory;
  dropDown: any;
  departmentDropDown = departmentDrop;

  constructor() {}

  ngOnInit(): void {
    this.dropDown = directoryDropDown;
  }

  search() {
    console.log(this.filteredData, 'kkkllnfdknk');
    if (this.searchValue.value) {
      this.filteredData = directory.filter((item) => {
        if (
          item.name
            .toLowerCase()
            .includes(this.searchValue.value.trim().toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    } else {
      this.filteredData = directory;
    }

    if (this.departmentSearch !== 'All' && this.searchValue.value) {
      this.filteredData = directory.filter((item) => {
        if (
          item.designation
            .toLowerCase()
            .includes(this.departmentSearch.toLowerCase()) &&
          item.name
            .toLowerCase()
            .includes(this.searchValue.value.trim().toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    }
  }

  filterValue(e: any) {
    console.log(e.value, 'kkkk');
    this.departmentSearch = e.value;
    if (this.departmentSearch !== 'All' && this.searchValue.value) {
      this.filteredData = directory.filter((item) => {
        if (
          item.designation
            .toLowerCase()
            .includes(this.departmentSearch.toLowerCase()) &&
          item.name
            .toLowerCase()
            .includes(this.searchValue.value.trim().toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    } else if (this.departmentSearch !== 'All') {
      const search = e.value.toLowerCase();
      console.log(search);
      this.filteredData = directory.filter((item) => {
        const department = item.designation.toLowerCase();

        if (department.includes(search)) {
          return true;
        }
        return false;
      });
    } else if (this.departmentSearch == 'All') {
      this.filteredData = directory;
    }
  }

  reset() {
    this.departmentSearch = 'All';
    this.searchValue.setValue('');
    this.search();
  }
}
