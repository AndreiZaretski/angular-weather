import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { FormatWeather } from '../models/enums/format-weather';

@Injectable({
  providedIn: 'root',
})
export class PresetStateService {
  private localStorageService = inject(LocalStorageService);

  private formatWeather$ = new BehaviorSubject<FormatWeather>(
    this.localStorageService.getItem('format') ?? FormatWeather.Daily,
  );

  formatWeatherPublic$ = this.formatWeather$.pipe();

  changeFormatWeather(format: FormatWeather) {
    this.localStorageService.setItem('format', format);
    this.formatWeather$.next(format);
  }

  get getCurrentFormatWeather() {
    return this.formatWeather$.getValue();
  }
}
