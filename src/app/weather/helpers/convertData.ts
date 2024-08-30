import { TableData } from '../models/interfaces/table-data';
import { WeatherDaily } from '../models/interfaces/weather-daily';
import { WeatherHourly } from '../models/interfaces/weather-hourly';

export const convertData = (
  name: string,
  daily: WeatherDaily,
  hourly: WeatherHourly,
): TableData[] => {
  const dailyTemps = daily.daily
    .map(d => ({
      dt: d.dt,
      temp: d.temp.day,
    }))
    .slice(0, 7);

  const hourlyTemps = hourly.hourly
    .map(h => ({
      dt: h.dt,
      temp: h.temp,
    }))
    .filter((_, i) => i % 3 === 0)
    .slice(0, 8);

  return [
    {
      timezone_offset: daily.timezone_offset,
      cityName: name,
      daily: dailyTemps,
      hourly: hourlyTemps,
    },
  ];
};
