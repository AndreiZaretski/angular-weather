import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { FormatWeather } from '../models/enums/format-weather';

@Injectable({
  providedIn: 'root',
})
export class SearchStateService {
  private localStorageService = inject(LocalStorageService);

  private formatWeather$ = new BehaviorSubject<FormatWeather>(
    this.localStorageService.getItem('format') ?? FormatWeather.Daily,
  );

  formatWeatherPublic$ = this.formatWeather$.pipe();

  private searchCity$ = new BehaviorSubject<string>(
    this.localStorageService.getItem('city') ?? '',
  );

  searchCityPublic$ = this.searchCity$.pipe();

  changeFormatWeather(format: FormatWeather) {
    this.localStorageService.setItem('format', format);
    this.formatWeather$.next(format);
  }

  changeFormatCity(cityName: string) {
    this.localStorageService.setItem('city', cityName);
    this.searchCity$.next(cityName);
  }

  get getCurrentFormatWeather() {
    return this.formatWeather$.getValue();
  }

  get getCurrentCityName() {
    return this.searchCity$.getValue();
  }
}
