import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from '../../models/interfaces/table-data';
import { dataWeather, formatMock } from './mockTableData';
import { FormatWeather } from '../../models/enums/format-wearher';

@Component({
  selector: 'app-table-weather',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './table-weather.component.html',
  styleUrl: './table-weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableWeatherComponent {
  format$: Observable<FormatWeather> = formatMock;

  // format: FormatWeather = FormatWeather.Hourly;

  formatWeather = FormatWeather;

  tableData$: Observable<TableData[]> = dataWeather;

  format = input.required<FormatWeather | null>();

  tableData = input.required<TableData[] | null>();
  // : TableData[] | null = null;
}
