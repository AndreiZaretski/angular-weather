export interface TableData {
  timezone_offset: number;
  cityName: string;
  daily: Temperature[];
  hourly: Temperature[];
}

type Temperature = {
  dt: number;
  temp: number;
};
