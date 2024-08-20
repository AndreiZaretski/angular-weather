import { inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
  forkJoin,
  map,
  Observable,
  of,
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

  private tableDate$ = new BehaviorSubject<TableData[]>([]);

  tableDatePublic$ = this.tableDate$.pipe();

  saveDate(cityName: string): Observable<void> {
    return this.httpService.getCity(cityName).pipe(
      switchMap(result => {
        if (!result || !result.length) {
          return EMPTY;
        }
        const { lat, lon, name } = result[0];
        return forkJoin([
          of(name),
          this.httpService.getDaily(lat, lon),
          this.httpService.getHourly(lat, lon),
        ]);
      }),
      map(([name, daily, hourly]) => {
        const tableData = convertData(name, daily, hourly);
        this.tableDate$.next(tableData);
      }),
    );
  }
}
