import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { directory } from 'src/app/constants/const_data';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  departmentSearch: any = 'All';

  searchValue = new FormControl();


  department: any;
  name: any;

  filteredData: any[] = directory;

  search() {
    console.log(this.filteredData, 'kkkllnfdknk');
    if (this.searchValue.value) {
      this.filteredData = directory.filter((item) => {
        if (
          item.name.toLowerCase().includes(this.searchValue.value.trim().toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    } else {
      this.filteredData = directory;
    }

    if (this.departmentSearch !== 'All' && this.searchValue.value ) {


      this.filteredData = directory.filter((item) => {
        if (item.designation.toLowerCase().includes(this.departmentSearch.toLowerCase()) && item.name.toLowerCase().includes(this.searchValue.value.trim().toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    }
  }

  departmentSelect(e: any) {
    console.log(e.value, 'kkkk');
    this.departmentSearch = e.value;
    if (this.departmentSearch) {
      const search = e.value.toLowerCase();
      console.log(search);
      this.filteredData = directory.filter((item) => {
        const department = item.designation.toLowerCase();

        if (department.includes(search)) {
          return true;
        }
        return false;
      });
    }
    // this.search();
  }
}
