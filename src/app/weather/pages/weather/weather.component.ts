import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { PresetFiterComponent } from '../../components/preset-fiter/preset-fiter.component';
import { TableWeatherComponent } from '../../components/table-weather/table-weather.component';
import { FormatWeather } from '../../models/enums/format-weather';
import { TableData } from '../../models/interfaces/table-data';
import { WeatherDataService } from '../../services/weather-data.service';
import { SearchStateService } from '../../services/search-state.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    SearchFormComponent,
    PresetFiterComponent,
    TableWeatherComponent,
    AsyncPipe,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit {
  private weatherDataService = inject(WeatherDataService);

  private searchStateService = inject(SearchStateService);

  private destroyRef = inject(DestroyRef);

  format$: Observable<FormatWeather> =
    this.searchStateService.formatWeatherPublic$;

  tableData$: Observable<TableData[]> =
    this.weatherDataService.tableDatePublic$;

  ngOnInit() {
    if (this.searchStateService.getCurrentCityName) {
      this.weatherDataService
        .saveDate(this.searchStateService.getCurrentCityName)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe();
    }
  }
}
