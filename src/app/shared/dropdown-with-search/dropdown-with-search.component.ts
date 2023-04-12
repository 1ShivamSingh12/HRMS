import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-dropdown-with-search',
  templateUrl: './dropdown-with-search.component.html',
  styleUrls: ['./dropdown-with-search.component.scss'],
})
export class DropdownWithSearchComponent implements OnInit {

  @Input() myControlName: any;
  @Input() error: any;

  @Input() data!: any;
  @Input() placeholder!: any;

  @Output() filterValue = new EventEmitter<any>();

  myControl = new FormControl('');
  filteredOptions!: Observable<any[]>;

  constructor() {}

  ngOnInit(): void {
    console.log(this.data,'dta');

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        let res = this._filter(value || '');
        if (!res.length) {
          res = ['no results Found'];
        }
        return res;
      })
    );
  }
  private _filter(value: any): any[] {
    const filterValue = value.toLowerCase();

    return this.data.list.filter((option: any) => {
      const res = option.viewValue?.toLowerCase().includes(filterValue);
      return res;
    });
  }

  onSelection(e:any) {
    this.filterValue.emit(e.value);
  }
}
