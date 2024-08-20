import { Observable, of } from 'rxjs';
import { FormatWeather } from '../../models/enums/format-wearher';

export const formatMock: Observable<FormatWeather> = of(FormatWeather.Hourly);

export const dataWeather = of([
  {
    timezone_offset: 25200,
    cityName: 'Minsk',
    daily: [
      { dt: 1720000, temp: 735 },
      { dt: 1720000, temp: 735 },
      { dt: 1720000, temp: 735 },
      { dt: 1720000, temp: 735 },
      { dt: 1720000, temp: 735 },
      { dt: 1720000, temp: 735 },
      { dt: 1720000, temp: 735 },
    ],
    hourly: [
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
    ],
  },
  {
    timezone_offset: 25200,
    cityName: 'Huinsk',
    daily: [
      { dt: 1720000, temp: 735 },
      { dt: 1720000, temp: 735 },
      { dt: 1720000, temp: 735 },
      { dt: 1720000, temp: 735 },
      { dt: 1720000, temp: 735 },
      { dt: 1720000, temp: 735 },
      { dt: 1720000, temp: 735 },
    ],
    hourly: [
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
      {
        dt: 1724072400,
        temp: 290.58,
      },
    ],
  },
]);
