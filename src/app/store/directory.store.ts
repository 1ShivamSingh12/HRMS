import { Injectable } from '@angular/core';
import { Directory } from '../models/directory.models';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { HttpService } from '../services/http/http.service';
import { catchError, switchMap, tap } from 'rxjs/operators';

export interface directoryState {
  directory: Directory[];
  searchString: string;
  filterValue: string;
  CouponCount: number;
  couponValue: number;
}

@Injectable()
export class directoryStore extends ComponentStore<directoryState> {
  constructor(private service: HttpService) {
    super({
      directory: [],
      searchString: '',
      filterValue: '',
      CouponCount: 0,
      couponValue: 0,
    });
    this.fetchresult();
  }

  readonly setDirectory = this.updater((state, directory: Directory[]) => ({
    ...state,
    directory,
  }));

  directory$: Observable<Directory[]> = this.select((state) => state.directory);
  couponCount$: Observable<any> = this.select((state) => state.CouponCount);
  couponValue$: Observable<any> = this.select((state) => state.couponValue);

  readonly filtereDirectory$: Observable<Directory[]> = this.select(
    ({ directory, searchString, filterValue }) =>
      directory.filter(
        (c) =>
          c.name.toLowerCase().includes(searchString.toLowerCase()) &&
          c.designation.toLowerCase().includes(filterValue.toLowerCase())
      )
  );

  fetchresult = this.effect((trigger$) =>
    trigger$.pipe(
      switchMap(() =>
        this.service.fetchDirectory().pipe(
          tap((data) => {
            this.setDirectory(data);
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
