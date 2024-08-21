import { inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
  forkJoin,
  map,
  Observable,
  of,
  shareReplay,
  switchMap,
} from 'rxjs';
import { HttpService } from './http.service';
import { TableData } from '../models/interfaces/table-data';
import { convertData } from '../helpers/convertData';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private httpService = inject(HttpService);

  private searchCity$ = new BehaviorSubject<string>('');

  tableDate$: Observable<TableData[]>;

  constructor() {
    this.tableDate$ = this.saveDate();
  }

  private saveDate(): Observable<TableData[]> {
    return this.searchCity$.pipe(
      switchMap(cityName =>
        cityName ? this.httpService.getCity(cityName) : EMPTY,
      ),
      switchMap(result => {
        if (!result || !result.length) {
          return of([]);
        }
        const { lat, lon, name } = result[0];
        return forkJoin([
          of(name),
          this.httpService.getDaily(lat, lon),
          this.httpService.getHourly(lat, lon),
        ]);
      }),
      map(([name, daily, hourly]) => {
        if (!name || !daily || !hourly) {
          return [];
        }
        const tableData = convertData(name, daily, hourly);
        return tableData;
      }),
      shareReplay(1),
    );
  }

  changeSearchCity(cityName: string) {
    this.searchCity$.next(cityName);
  }
}
