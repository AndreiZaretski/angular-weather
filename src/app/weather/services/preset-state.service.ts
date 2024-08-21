import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormatWeather } from '../models/enums/format-weather';

@Injectable({
  providedIn: 'root',
})
export class PresetStateService {
  private formatWeather$ = new BehaviorSubject<FormatWeather>(
    FormatWeather.Daily,
  );

  formatWeatherPublic$ = this.formatWeather$.pipe();

  changeFormatWeather(format: FormatWeather) {
    this.formatWeather$.next(format);
  }
}
