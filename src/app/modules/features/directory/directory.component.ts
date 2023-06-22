import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { directory } from 'src/app/constants/const_data';
import {
  departmentDrop,
  directoryDropDown,
} from 'src/app/constants/drop_down_data';
import {
  getDirectoryFilter,
  getSearchDirectoryFilter,
} from 'src/app/store/state.actions';
import {
  getDirectoryDataSelectorFilter,
  getDirectoryDataSelectorSearch,
} from 'src/app/store/state.selector';

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
  filteredData: any;
  // filteredData$ =new allSelector().directory$;

  dropDown: any;
  departmentDropDown = departmentDrop;

  constructor(
    public route: Router,
    private store: Store,
    private http: HttpClient
  ) { }

  _qp: any = {

  }


  ngOnInit(): void {
    this.dropDown = directoryDropDown;
    // this.filteredData = this.store.select(getDirectoryDataSelectorSearch);
    this.http.get('http://localhost:4000/directory').subscribe((res: any) => {
      console.log(res, 'kewfeufk');
      this.filteredData = res;
    });
  }

  search(searchString: any, filterValue: any) {

    if (searchString) {
      this._qp['nameSearch'] = searchString.trim()
      this.http.get('http://localhost:4000/directory-search', { params: this._qp })
        .subscribe((res: any) => {
          console.log(res, 'dcewwedwedwedwedwedwedwedwedwedwedwedwe');

          this.filteredData = res;
        });
    }

    // if (searchString) {
    //   this.store.dispatch(
    //     getSearchDirectoryFilter({ searchString, filterValue })
    //   );
    //   this.filteredData = this.store.select(getDirectoryDataSelectorSearch);
    //   console.log(this.filteredData.length);
    // }

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


  filterValue(filterValue: any, searchString: any) {

    // console.log(this.directoryControl.value, 'kkkk');

    
    if(filterValue != 'All'){
      this._qp['departmentSearch'] = filterValue

      this.http.get('http://localhost:4000/directory-search', { params: this._qp }).subscribe((res: any) => {
        console.log(res, 'dcewwedwedwedwedwedwedwedwedwedwedwedwe');
        this.filteredData = res;
      });
    }
    // if(filterValue && searchString == ''){
    // }else{

    // }



    // this.store.dispatch(getDirectoryFilter({ filterValue, searchString }));
    // this.filteredData = this.store.select(getDirectoryDataSelectorFilter);
    // console.log(this.filteredData);





    // this.directoryStore.patchState({filterValue})

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

  reset(searchString: any, filterValue: any) {
    console.log(searchString, filterValue, 'djhvyuef');


    this.searchValue.setValue('');
    this.directoryControl.setValue('');


    // this.filteredData = this.store.select(getDirectoryDataSelectorSearch);




    // this.search(this.searchValue, this.directoryControl);

    // this.directoryStore.patchState({searchString})
    // this.directoryStore.patchState({filterValue})

    // this.directoryControl.setValue() = 'All';
  }
}
