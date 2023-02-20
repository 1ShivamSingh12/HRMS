import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { LOGIN } from 'src/app/constants/routes';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit, AfterViewInit {
  constructor() {}
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {}

  @ViewChild('nameInput') nameInput: any;
  @ViewChild('departmentSelect') departmentSelect!: any;

  searchText: any;

  directory = [
    {
      name: 'Arpit',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Shivam',
      designation: 'Sr. Software Engineer - Angular',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Swapnil',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Aahan Verma',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Ayush',
      designation: 'Sr. Software Engineer - React',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Aahan Verma',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Aahan Verma',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Aahan Verma',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Aahan Verma',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
    {
      name: 'Aahan Verma',
      designation: 'Sr. Software Engineer - Android',
      email: 'shivam.singh5@appinvetiv.com',
      birthday: '21st Aug ',
    },
  ];

  department: any;
  name: any;

  filteredData: any[] = [];

  searchKey(e: any) {
    console.log(e,"jackD");

    const search = e.toLowerCase();
    this.directory = this.directory.filter((item) => {
      const name = item.name.toLowerCase();
      const department = item.designation.toLowerCase();
      if (name.includes(search) || department.includes(search)) {
        return true;
      }
      return false;
    });

    //  this.arr = this.arr.filter((item:any)=> {item.a;sdfj == })
  }

  ngAfterViewInit(): void {
    // console.log(this.departmentSelect.value);
    // if(this.departmentSelect.value != undefined || this.nameInput.value != undefined){
    //   const departmentSearchString = this.departmentSelect.value.toLowerCase();
    //   const nameSearchString = this.nameInput.nativeElement.value.toLowerCase();
    //   this.directory = this.directory.filter(item => {
    //     const department = item.designation.toLowerCase();
    //     const name = item.name.toLowerCase();
    //     return department.includes(departmentSearchString) && name.includes(nameSearchString);
    //   });
    // }
  }

  search() {
    console.log(this.departmentSelect.value);
  }
}
