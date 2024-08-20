import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TableData } from '../../models/interfaces/table-data';
import { FormatWeather } from '../../models/enums/format-wearher';
import { KelvinToCelsiusPipe } from '../../pipes/kelvin-to-celsius.pipe';

@Component({
  selector: 'app-table-weather',
  standalone: true,
  imports: [DatePipe, KelvinToCelsiusPipe],
  templateUrl: './table-weather.component.html',
  styleUrl: './table-weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableWeatherComponent {
  formatWeather = FormatWeather;

  format = input.required<FormatWeather | null>();

  tableData = input.required<TableData[] | null>();
}
