import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table-weather',
  standalone: true,
  imports: [],
  templateUrl: './table-weather.component.html',
  styleUrl: './table-weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableWeatherComponent {}
