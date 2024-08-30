import { Pipe, PipeTransform } from '@angular/core';

const KELVIN_DEGREE = 273.15;
const DECIMAL_PLACES = 2;

@Pipe({
  name: 'kelvinToCelsius',
  standalone: true,
})
export class KelvinToCelsiusPipe implements PipeTransform {
  transform(value: number): string {
    return `${(value - KELVIN_DEGREE).toFixed(DECIMAL_PLACES)}°`;
  }
}
