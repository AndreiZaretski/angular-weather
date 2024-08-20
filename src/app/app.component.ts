import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainComponent } from './core/components/main/main.component';
import { WeatherComponent } from './weather/pages/weather/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent, WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
