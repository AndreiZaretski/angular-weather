import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { PresetFiterComponent } from '../../components/preset-fiter/preset-fiter.component';
import { TableWeatherComponent } from '../../components/table-weather/table-weather.component';
import { FormatWeather } from '../../models/enums/format-weather';
import { TableData } from '../../models/interfaces/table-data';
import { WeatherDataService } from '../../services/weather-data.service';
import { PresetStateService } from '../../services/preset-state.service';

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
export class WeatherComponent {
  private weatherDataService = inject(WeatherDataService);

  private searchStateService = inject(PresetStateService);

  format$: Observable<FormatWeather> =
    this.searchStateService.formatWeatherPublic$;

  tableData$: Observable<TableData[]> = this.weatherDataService.tableDate$;
}
