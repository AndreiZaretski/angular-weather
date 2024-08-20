import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { PresetFiterComponent } from '../../components/preset-fiter/preset-fiter.component';
import { TableWeatherComponent } from '../../components/table-weather/table-weather.component';
import { formatMock } from '../../components/table-weather/mockTableData';
import { FormatWeather } from '../../models/enums/format-wearher';
import { TableData } from '../../models/interfaces/table-data';
import { WeatherDataService } from '../../services/weather-data.service';

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

  format$: Observable<FormatWeather> = formatMock;

  tableData$: Observable<TableData[]> =
    this.weatherDataService.tableDatePublic$;

  constructor() {
    this.tableData$.subscribe(data => {
      console.log('Table Data:', data);
    });
    this.format$.subscribe(format => console.log('Format:', format));
  }
}
