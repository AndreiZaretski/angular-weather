import { Hourly } from './hourly';
import { Weather } from './weather';

export interface WeatherHourly extends Weather {
  hourly: Hourly[];
}
