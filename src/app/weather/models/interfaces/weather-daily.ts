import { Daily } from './daily';
import { Weather } from './weather';

export interface WeatherDaily extends Weather {
  daily: Daily[];
}
