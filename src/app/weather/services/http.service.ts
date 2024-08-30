import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { City } from '../models/interfaces/city';
import { environment } from '../../../environments/environment';
import { WeatherDaily } from '../models/interfaces/weather-daily';
import { WeatherHourly } from '../models/interfaces/weather-hourly';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private httpClient = inject(HttpClient);

  getCity(cityName: string): Observable<City[]> {
    const params = new HttpParams().set('q', cityName).set('limit', 1);
    const { apiCityUrl } = environment;
    return this.httpClient.get<City[]>(apiCityUrl, { params }).pipe(
      catchError(error => {
        console.error(error);
        return EMPTY;
      }),
    );
  }

  getDaily(lat: number, lon: number) {
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('hourly', 'current,minutely,hourly,alerts');
    const { apiWeatherUrl } = environment;
    return this.httpClient.get<WeatherDaily>(apiWeatherUrl, { params }).pipe(
      catchError(error => {
        console.error(error);
        return EMPTY;
      }),
    );
  }

  getHourly(lat: number, lon: number) {
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('hourly', 'current,minutely,daily,alerts');
    const { apiWeatherUrl } = environment;
    return this.httpClient.get<WeatherHourly>(apiWeatherUrl, { params }).pipe(
      catchError(error => {
        console.error(error);
        return EMPTY;
      }),
    );
  }
}
